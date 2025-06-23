import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // <-- NOVO: Importe o AuthService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
 constructor(private authService: AuthService) {}

  sair() : void{
    this.authService.logout();
  }
}
