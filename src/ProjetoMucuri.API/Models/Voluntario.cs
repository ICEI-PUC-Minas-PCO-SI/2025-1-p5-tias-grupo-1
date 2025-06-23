// Arquivo: Models/Voluntario.cs
using System.Collections.Generic;

public class Voluntario
{
    public long Id { get; set; }
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Telefone { get; set; }
    public string Documento { get; set; }
    public string TipoVoluntariado { get; set; }
    public DateTime CriadoEm { get; set; }
    public DateTime ModificadoEm { get; set; }
    public ICollection<Doacao> Doacoes { get; set; } = new List<Doacao>();
}