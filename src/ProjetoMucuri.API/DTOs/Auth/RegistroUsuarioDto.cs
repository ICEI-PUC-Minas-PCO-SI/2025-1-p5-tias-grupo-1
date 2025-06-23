using System.ComponentModel.DataAnnotations;
    public class RegistroUsuarioDto
    {
        [Required]
        public string NomeCompleto { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Cpf { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        public string Senha { get; set; }

        [Required]
        public PerfilUsuario Perfil { get; set; } // Administrador ou Atendente
    }
