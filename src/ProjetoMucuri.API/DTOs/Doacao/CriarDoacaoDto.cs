using System.ComponentModel.DataAnnotations;

namespace ProjetoSocial.API.DTOs.Doacao
{
    public class CriarDoacaoDto
    {
        [Required(ErrorMessage = "O nome do doador é obrigatório.")]
        public string NomeDoador { get; set; }

        [Required(ErrorMessage = "O e-mail do doador é obrigatório.")]
        [EmailAddress(ErrorMessage = "O e-mail do doador não é válido.")]
        public string EmailDoador { get; set; }

        [Required(ErrorMessage = "O documento do doador é obrigatório.")]
        public string DocumentoDoador { get; set; } 

        public string? TelefoneDoador { get; set; }

        [Required(ErrorMessage = "O valor da doação é obrigatório.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "O valor da doação deve ser positivo.")]
        public decimal Valor { get; set; }

        public string? Descricao { get; set; }

        [Required(ErrorMessage = "A data da doação é obrigatória.")]
        public DateTime Data { get; set; }
    }
}