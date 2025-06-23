import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service'; // <-- NOVO: Importe o AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,  FontAwesomeModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordFieldType: string = 'password';
  isLoading = false; // <-- NOVO: Para controlar o estado de carregamento (ex: desabilitar o botão)
  errorMessage: string | null = null; // <-- NOVO: Para exibir mensagens de erro da API

  loginForm = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Senha: ['', Validators.required]
  });

 
  constructor(
    private router: Router, 
    library: FaIconLibrary, 
    private fb: FormBuilder,
    private authService: AuthService 
  ) { 
    library.addIcons(faEye, faEyeSlash);
  }

  get email() {
    return this.loginForm.get('email');
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


  onSubmit(): void {
    // Reseta a mensagem de erro a cada nova tentativa
    this.errorMessage = null;

    if (this.loginForm.invalid) {
      // O Angular já vai exibir os erros de validação no template se configurado
      return;
    }

    this.isLoading = true; // Inicia o estado de carregamento
    
    // Pega as credenciais do formulário de forma segura
    const credentials = {
      Email: this.loginForm.value.Email!,
      Senha: this.loginForm.value.Senha!
    };

    console.log('Enviando para a API:', JSON.stringify(credentials, null, 2));

    this.authService.login(credentials).subscribe({
      next: (response) => {

        // Sucesso! O serviço já salvou o token. Agora apenas redirecionamos.
        console.log('Login bem-sucedido!', response);
        this.router.navigate(['/dashboard']); // Ou para a rota que desejar após o login
      },
      error: (err) => {
        // A API retornou um erro (ex: 401 Unauthorized, 404 Not Found)
        console.error('Falha no login:', err);
        this.errorMessage = 'Email ou senha inválidos. Verifique suas credenciais.';
        this.isLoading = false; // Finaliza o estado de carregamento
      },
      complete: () => {
        this.isLoading = false; // Finaliza o estado de carregamento em caso de sucesso
      }
    });
  }
}