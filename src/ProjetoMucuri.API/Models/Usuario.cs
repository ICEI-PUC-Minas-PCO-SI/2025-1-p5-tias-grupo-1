using Microsoft.AspNetCore.Identity;

/// <summary>
/// Representa um usuário do sistema com permissão de login (ex: Administrador).
/// Herda os campos de segurança do ASP.NET Core Identity.
/// </summary>
public class Usuario : IdentityUser
{
    public string NomeCompleto { get; set; }

    public string Cpf { get; set; }

    public PerfilUsuario Perfil { get; set; }

    public DateTime CriadoEm { get; set; }
    public DateTime ModificadoEm { get; set; }
}

public enum PerfilUsuario
{
    Administrador = 1,
    Atendente = 2
}