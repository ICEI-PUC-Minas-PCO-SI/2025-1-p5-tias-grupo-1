using Microsoft.EntityFrameworkCore;
using ProjetoSocial.API.DTOs.Doacao;

    public class DoacaoService
    {
        private readonly AppDbContext _context;

        public DoacaoService(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Lista todas as doações, incluindo os dados básicos do voluntário associado.
        /// </summary>
        public async Task<IEnumerable<Doacao>> ListarDoacoesAsync()
        {
            // O .Include() é crucial para carregar os dados do Voluntário junto com a Doação.
            // Isso evita o problema de N+1 queries.
            return await _context.Doacoes
                .Include(d => d.Voluntario)
                .AsNoTracking()
                .ToListAsync();
        }

        /// <summary>
        /// Registra uma nova doação, aplicando a regra de negócio de "encontrar ou criar" o Voluntário.
        /// </summary>
        public async Task<Doacao> RegistrarDoacaoAsync(CriarDoacaoDto dto)
        {
            // 1. PROCURA se o voluntário (doador) já existe pelo documento.
            var voluntario = await _context.Voluntarios
                .FirstOrDefaultAsync(v => v.Documento == dto.DocumentoDoador);

            // 2. SE NÃO EXISTIR, CRIA um novo registro de Voluntário.
            if (voluntario == null)
            {
                voluntario = new Voluntario
                {
                    Nome = dto.NomeDoador,
                    Email = dto.EmailDoador,
                    Documento = dto.DocumentoDoador,
                    Telefone = dto.TelefoneDoador,
                    TipoVoluntariado = "Doador Financeiro", // Define um tipo padrão para quem faz doação
                    CriadoEm = DateTime.UtcNow,
                    ModificadoEm = DateTime.UtcNow
                };
                // Adiciona o novo voluntário ao contexto do EF Core.
                await _context.Voluntarios.AddAsync(voluntario);
            }

            // 3. CRIA a entidade Doação.
            var doacao = new Doacao
            {
                Valor = dto.Valor,
                Descricao = dto.Descricao,
                Data = dto.Data,
                // Vincula a doação ao voluntário (seja o que foi encontrado ou o que acabamos de criar).
                // O EF Core é inteligente para lidar com isso e preencher o VoluntarioId corretamente.
                Voluntario = voluntario
            };

            // Adiciona a nova doação ao contexto.
            await _context.Doacoes.AddAsync(doacao);

            // 4. SALVA TODAS AS MUDANÇAS.
            // Isso acontece em uma única transação no banco de dados. Se algo der errado,
            // nem o voluntário (se for novo) nem a doação serão salvos, garantindo a integridade dos dados.
            await _context.SaveChangesAsync();

            return doacao;
        }
    }
