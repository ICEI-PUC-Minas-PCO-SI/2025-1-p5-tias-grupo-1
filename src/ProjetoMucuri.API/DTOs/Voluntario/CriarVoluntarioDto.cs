using System.ComponentModel.DataAnnotations;



    public class CriarVoluntarioDto
    {
        [Required(ErrorMessage = "O nome é obrigatório.")]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "O nome deve ter entre 3 e 100 caracteres.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O e-mail é obrigatório.")]
        [EmailAddress(ErrorMessage = "O e-mail fornecido não é válido.")]
        public string Email { get; set; }

        public string Telefone { get; set; }

        public string Documento { get; set; }

        public string TipoVoluntariado { get; set; }
    }
