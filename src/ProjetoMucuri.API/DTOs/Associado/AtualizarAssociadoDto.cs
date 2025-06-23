using System.ComponentModel.DataAnnotations;

public class AtualizarAssociadoDto
{
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Telefone { get; set; }
    public string DescricaoAtividade { get; set; }
    public DateTime DataNascimento { get; set; }
    public string Rua { get; set; }
    public string Numero { get; set; }
    public string Bairro { get; set; }
    public string Complemento { get; set; }
    public string Cep { get; set; }
    public string Documento { get; set; }
}