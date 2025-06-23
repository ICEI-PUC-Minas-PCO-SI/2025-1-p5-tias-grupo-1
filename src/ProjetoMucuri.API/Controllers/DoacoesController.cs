using Microsoft.AspNetCore.Mvc;
using ProjetoSocial.API.DTOs.Doacao;

    [ApiController]
    [Route("api/[controller]")]
    public class DoacoesController : ControllerBase
    {
        private readonly DoacaoService _doacaoService;

        public DoacoesController(DoacaoService doacaoService)
        {
            _doacaoService = doacaoService;
        }

        /// <summary>
        /// GET: api/doacoes - Lista todas as doações registradas.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var doacoes = await _doacaoService.ListarDoacoesAsync();

            // Mapeia as entidades para DTOs para retornar ao cliente.
            // Isso garante que você só envia os dados que o front-end precisa.
            var doacoesDto = doacoes.Select(d => new DoacaoDto
            {
                Id = d.Id,
                Valor = d.Valor,
                Descricao = d.Descricao,
                Data = d.Data,
                Voluntario = new VoluntarioSimplesDto
                {
                    Id = d.Voluntario.Id,
                    Nome = d.Voluntario.Nome,
                    Email = d.Voluntario.Email
                }
            });

            return Ok(doacoesDto);
        }

        /// <summary>
        /// POST: api/doacoes - Registra uma nova doação.
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Registrar([FromBody] CriarDoacaoDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // O serviço executa toda a lógica complexa.
            var novaDoacao = await _doacaoService.RegistrarDoacaoAsync(dto);

            // Mapeia a entidade retornada para o DTO de resposta.
            var doacaoDto = new DoacaoDto
            {
                Id = novaDoacao.Id,
                Valor = novaDoacao.Valor,
                Descricao = novaDoacao.Descricao,
                Data = novaDoacao.Data,
                Voluntario = new VoluntarioSimplesDto
                {
                    Id = novaDoacao.Voluntario.Id,
                    Nome = novaDoacao.Voluntario.Nome,
                    Email = novaDoacao.Voluntario.Email
                }
            };
            
            // Retorna 200 OK com o objeto criado.
            // Poderia também ser um CreatedAtAction se houvesse um endpoint para buscar doação por ID.
            return Ok(doacaoDto);
        }
    }
