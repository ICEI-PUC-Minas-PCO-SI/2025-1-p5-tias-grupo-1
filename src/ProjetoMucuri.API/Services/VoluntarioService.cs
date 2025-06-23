using Microsoft.EntityFrameworkCore;
    public class VoluntarioService
    {
        private readonly AppDbContext _context;

        public VoluntarioService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Voluntario>> ListarVoluntariosAsync()
        {
            return await _context.Voluntarios.AsNoTracking().ToListAsync();
        }

        public async Task<Voluntario> ObterVoluntarioPorIdAsync(long id)
        {
            return await _context.Voluntarios.FindAsync(id);
        }

        public async Task<Voluntario> CriarVoluntarioAsync(CriarVoluntarioDto voluntarioDto)
        {
            var voluntario = new Voluntario
            {
                Nome = voluntarioDto.Nome,
                Email = voluntarioDto.Email,
                Telefone = voluntarioDto.Telefone,
                Documento = voluntarioDto.Documento,
                TipoVoluntariado = voluntarioDto.TipoVoluntariado,
                CriadoEm = DateTime.UtcNow,
                ModificadoEm = DateTime.UtcNow
            };

            await _context.Voluntarios.AddAsync(voluntario);
            await _context.SaveChangesAsync();
            return voluntario;
        }

        public async Task<Voluntario> AtualizarVoluntarioAsync(long id, AtualizarVoluntarioDto voluntarioDto)
        {
            var voluntarioExistente = await _context.Voluntarios.FindAsync(id);

            if (voluntarioExistente == null)
            {
                return null; 
            }

            voluntarioExistente.Nome = voluntarioDto.Nome ?? voluntarioExistente.Nome;
            voluntarioExistente.Email = voluntarioDto.Email ?? voluntarioExistente.Email;
            voluntarioExistente.Telefone = voluntarioDto.Telefone ?? voluntarioExistente.Telefone;
            voluntarioExistente.Documento = voluntarioDto.Documento ?? voluntarioExistente.Documento;
            voluntarioExistente.TipoVoluntariado = voluntarioDto.TipoVoluntariado ?? voluntarioExistente.TipoVoluntariado;
            voluntarioExistente.ModificadoEm = DateTime.UtcNow;
            
            await _context.SaveChangesAsync();
            return voluntarioExistente;
        }

        public async Task<bool> DeletarVoluntarioAsync(long id)
        {
            var voluntario = await _context.Voluntarios.FindAsync(id);

            if (voluntario == null)
            {
                return false; 
            }

            _context.Voluntarios.Remove(voluntario);
            await _context.SaveChangesAsync();
            return true; 
        }
    }
