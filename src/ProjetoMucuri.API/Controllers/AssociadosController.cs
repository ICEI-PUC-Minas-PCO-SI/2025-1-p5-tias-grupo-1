using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssociadosController : ControllerBase
{
    private readonly AssociadoService _associadoService;

    public AssociadosController(AssociadoService associadoService)
    {
        _associadoService = associadoService;
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var associados = await _associadoService.ListarAssociadosAsync();
        return Ok(associados);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> ObterPorId(long id)
    {
        var associado = await _associadoService.ObterAssociadoPorIdAsync(id);
        if (associado == null) return NotFound();
        return Ok(associado);
    }

    [HttpPost]
    public async Task<IActionResult> Criar([FromBody] CriarAssociadoDto dto)
    {
        var novoAssociado = await _associadoService.CriarAssociadoAsync(dto);
        return CreatedAtAction(nameof(ObterPorId), new { id = novoAssociado.Id }, novoAssociado);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Atualizar(long id, [FromBody] AtualizarAssociadoDto dto)
    {
        var associadoAtualizado = await _associadoService.AtualizarAssociadoAsync(id, dto);
        if (associadoAtualizado == null) return NotFound();
        return Ok(associadoAtualizado);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Deletar(long id)
    {
        var sucesso = await _associadoService.DeletarAssociadoAsync(id);
        if (!sucesso) return NotFound();
        return NoContent(); // Sucesso, sem conteúdo para retornar
    }
}