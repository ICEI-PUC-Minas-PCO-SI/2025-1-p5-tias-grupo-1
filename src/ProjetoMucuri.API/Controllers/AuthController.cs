using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<Usuario> _userManager;
        private readonly SignInManager<Usuario> _signInManager;
        private readonly TokenService _tokenService;

        public AuthController(UserManager<Usuario> userManager, SignInManager<Usuario> signInManager, TokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginResponseDto>> Login([FromBody] LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null) return Unauthorized("Credenciais inválidas.");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Senha, false);
            if (!result.Succeeded) return Unauthorized("Credenciais inválidas.");

            var roles = await _userManager.GetRolesAsync(user);

            return Ok(new LoginResponseDto
            {
                Token = await _tokenService.GerarToken(user),
                Email = user.Email,
                Nome = user.NomeCompleto,
                Perfil = roles.FirstOrDefault() ?? user.Perfil.ToString()
            });
        }

        // Este endpoint deve ser protegido e acessível apenas por um Administrador
        [HttpPost("register")]
        [Authorize(Roles = "Administrador")] 
        public async Task<IActionResult> Register([FromBody] RegistroUsuarioDto registroDto)
        {
            var userExists = await _userManager.FindByEmailAsync(registroDto.Email);
            if (userExists != null) return BadRequest("Email já cadastrado.");

            var user = new Usuario
            {
                UserName = registroDto.Email,
                Email = registroDto.Email,
                NomeCompleto = registroDto.NomeCompleto,
                Cpf = registroDto.Cpf,
                Perfil = registroDto.Perfil,
                CriadoEm = DateTime.UtcNow,
                ModificadoEm = DateTime.UtcNow
            };

            var result = await _userManager.CreateAsync(user, registroDto.Senha);
            if (!result.Succeeded) return BadRequest(result.Errors);
            
            // Adiciona o usuário ao perfil (role) correspondente
            await _userManager.AddToRoleAsync(user, registroDto.Perfil.ToString());

            return Ok("Usuário criado com sucesso!");
        }

        [HttpGet("perfil")]
        [Authorize] // <--- Protege o endpoint. Só acessível com um token válido.
        public async Task<ActionResult<PerfilDto>> GetPerfil()
        {
            // Pega o ID do usuário a partir do token JWT
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound("Usuário não encontrado.");

            return Ok(new PerfilDto
            {
                NomeCompleto = user.NomeCompleto,
                Email = user.Email,
                Cpf = user.Cpf
            });
        }

        [HttpPut("perfil")]
        [Authorize] // <--- Protege o endpoint
        public async Task<IActionResult> UpdatePerfil([FromBody] PerfilDto perfilDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null) return NotFound("Usuário não encontrado.");

            user.NomeCompleto = perfilDto.NomeCompleto;
            user.Cpf = perfilDto.Cpf;
            // A alteração de e-mail requer um processo de confirmação,
            // então geralmente é mais complexo do que isso.
            // user.Email = perfilDto.Email; 
            user.ModificadoEm = DateTime.UtcNow;

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded) return BadRequest(result.Errors);
            
            return Ok("Perfil atualizado com sucesso.");
        }
    }
