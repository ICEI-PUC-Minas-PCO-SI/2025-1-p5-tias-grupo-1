using Microsoft.EntityFrameworkCore;

public class AssociadoService
{
    private readonly AppDbContext _context;

    public AssociadoService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Associado>> ListarAssociadosAsync()
    {
        return await _context.Associados.ToListAsync();
    }

    public async Task<Associado> ObterAssociadoPorIdAsync(long id)
    {
        return await _context.Associados.FindAsync(id);
    }

    public async Task<Associado> CriarAssociadoAsync(CriarAssociadoDto associadoDto)
    {
        var associado = new Associado
        {
            Nome = associadoDto.Nome,
            Email = associadoDto.Email,
            Telefone = associadoDto.Telefone,
            DescricaoAtividade = associadoDto.DescricaoAtividade,
            DataNascimento = associadoDto.DataNascimento,
            Rua = associadoDto.Rua,
            Numero = associadoDto.Numero,
            Bairro = associadoDto.Bairro,
            Complemento = associadoDto.Complemento,
            Cep = associadoDto.Cep,
            Documento = associadoDto.Documento,
            CriadoEm = DateTime.UtcNow,
            ModificadoEm = DateTime.UtcNow
        };

        await _context.Associados.AddAsync(associado);
        await _context.SaveChangesAsync();
        return associado;
    }

    public async Task<Associado> AtualizarAssociadoAsync(long id, AtualizarAssociadoDto associadoDto)
    {
        var associadoExistente = await _context.Associados.FindAsync(id);
        if (associadoExistente == null)
        {
            return null; 
        }

    
        associadoExistente.Nome = associadoDto.Nome ?? associadoExistente.Nome;
        associadoExistente.Email = associadoDto.Email ?? associadoExistente.Email;
        associadoExistente.Telefone = associadoDto.Telefone ?? associadoExistente.Telefone;
        associadoExistente.DescricaoAtividade = associadoDto.DescricaoAtividade ?? associadoExistente.DescricaoAtividade;
        associadoExistente.Rua = associadoDto.Rua ?? associadoExistente.Rua;
        associadoExistente.Numero = associadoDto.Numero ?? associadoExistente.Numero;
        associadoExistente.Bairro = associadoDto.Bairro ?? associadoExistente.Bairro;
        associadoExistente.Complemento = associadoDto.Complemento ?? associadoExistente.Complemento;
        associadoExistente.Cep = associadoDto.Cep ?? associadoExistente.Cep;
        associadoExistente.Documento = associadoDto.Documento ?? associadoExistente.Documento;
        
        associadoExistente.ModificadoEm = DateTime.UtcNow;

        _context.Associados.Update(associadoExistente);
        await _context.SaveChangesAsync();
        return associadoExistente;
    }

    public async Task<bool> DeletarAssociadoAsync(long id)
    {
        var associado = await _context.Associados.FindAsync(id);
        if (associado == null)
        {
            return false;
        }

        _context.Associados.Remove(associado);
        await _context.SaveChangesAsync();
        return true;
    }
}