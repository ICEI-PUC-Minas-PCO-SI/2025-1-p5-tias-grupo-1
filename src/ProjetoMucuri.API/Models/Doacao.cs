public class Doacao
{
    public long Id { get; set; }
    /// Chave estrangeira obrigatória para a tabela de Voluntarios.
    public long VoluntarioId { get; set; }
    public decimal Valor { get; set; }
    public string Descricao { get; set; }
    public DateTime Data { get; set; }
    public Voluntario Voluntario { get; set; }
}