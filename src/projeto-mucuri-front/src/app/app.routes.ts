import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AssociadosComponent } from './pages/associados/associados.component';
import { DoacoesComponent } from './pages/doacoes/doacoes.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { AuthGuard } from './security/auth.guard';

export const routes: Routes = [
  // Redireciona a rota raiz para a tela de login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // Rota do Dashboard que contém as outras páginas
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'associados', pathMatch: 'full' }, // Rota padrão do dashboard
      { path: 'associados', component: AssociadosComponent },
      { path: 'doacoes', component: DoacoesComponent },
      { path: 'voluntarios', component: VoluntariosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}