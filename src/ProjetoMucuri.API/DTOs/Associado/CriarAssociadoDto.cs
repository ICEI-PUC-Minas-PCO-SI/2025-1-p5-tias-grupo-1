using System.ComponentModel.DataAnnotations;

public class CriarAssociadoDto
{
    [Required]
    public string Nome { get; set; }
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    public string Telefone { get; set; }
    public string DescricaoAtividade { get; set; }
    public DateTime DataNascimento { get; set; }
    public string Rua { get; set; }
    public string Numero { get; set; }
    public string Bairro { get; set; }
    public string Complemento { get; set; }
    public string Cep { get; set; }
    [Required]
    public string Documento { get; set; }
}