using Microsoft.AspNetCore.Mvc;

namespace ProjetoSocial.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VoluntariosController : ControllerBase
    {
        private readonly VoluntarioService _voluntarioService;

        public VoluntariosController(VoluntarioService voluntarioService)
        {
            _voluntarioService = voluntarioService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var voluntarios = await _voluntarioService.ListarVoluntariosAsync();
            return Ok(voluntarios);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObterPorId(long id)
        {
            var voluntario = await _voluntarioService.ObterVoluntarioPorIdAsync(id);

            if (voluntario == null)
            {
                return NotFound("Voluntário não encontrado.");
            }

            return Ok(voluntario);
        }

        [HttpPost]
        public async Task<IActionResult> Criar([FromBody] CriarVoluntarioDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var novoVoluntario = await _voluntarioService.CriarVoluntarioAsync(dto);

            // Retorna 201 Created com a localização do novo recurso e o objeto criado
            return CreatedAtAction(nameof(ObterPorId), new { id = novoVoluntario.Id }, novoVoluntario);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(long id, [FromBody] AtualizarVoluntarioDto dto)
        {
            var voluntarioAtualizado = await _voluntarioService.AtualizarVoluntarioAsync(id, dto);

            if (voluntarioAtualizado == null)
            {
                return NotFound("Voluntário não encontrado para atualização.");
            }

            return Ok(voluntarioAtualizado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar(long id)
        {
            var sucesso = await _voluntarioService.DeletarVoluntarioAsync(id);

            if (!sucesso)
            {
                return NotFound("Voluntário não encontrado para exclusão.");
            }

            return NoContent();
        }
    }
}