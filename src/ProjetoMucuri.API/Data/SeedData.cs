using Microsoft.AspNetCore.Identity;

    public static class SeedData
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            string[] roleNames = { "Administrador", "Atendente" };

            foreach (var roleName in roleNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    // Cria o perfil se ele não existir
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
        }
    }