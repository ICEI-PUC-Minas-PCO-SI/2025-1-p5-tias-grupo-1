using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : IdentityDbContext<Usuario>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Associado> Associados { get; set; }
    public DbSet<Voluntario> Voluntarios { get; set; }
    public DbSet<Doacao> Doacoes { get; set; }
}