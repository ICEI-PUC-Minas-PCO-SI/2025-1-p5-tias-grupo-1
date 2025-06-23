namespace ProjetoSocial.API.DTOs.Doacao
{
    /// <summary>
    /// DTO para retornar os dados de uma Doação, incluindo informações do Voluntário associado.
    /// </summary>
    public class DoacaoDto
    {
        public long Id { get; set; }
        public decimal Valor { get; set; }
        public string? Descricao { get; set; }
        public DateTime Data { get; set; }
        public VoluntarioSimplesDto Voluntario { get; set; }
    }
    public class VoluntarioSimplesDto
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
    }
}