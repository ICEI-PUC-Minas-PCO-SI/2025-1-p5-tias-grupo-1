import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap } from 'rxjs';

// Interface para tipar a resposta da sua API
export interface AuthResponseData {
  Token: string;
  email: string;
  nome: string;
  perfil: string;
}

// Interface para os dados do usuário que vamos armazenar
export interface UserData {
  email: string;
  nome: string;
  perfil: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;
  private isBrowser: boolean;

  private apiUrl = 'http://localhost:5142/api/Auth/login';

  constructor(
    private http: HttpClient, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // <-- NOVO: Injeta o token da plataforma
  ) {
    // <-- NOVO: Verifica se estamos no navegador
    this.isBrowser = isPlatformBrowser(this.platformId);

    // <-- ALTERADO: Inicializa o BehaviorSubject de forma segura
    // No servidor, sempre começará como 'false'. No navegador, lerá o localStorage.
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  login(credentials: any): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.apiUrl, credentials).pipe(
      tap(response => {
        this.saveAuthData(response);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    // <-- ALTERADO: Adiciona uma verificação de segurança
    if (this.isBrowser) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
    }
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    // <-- ALTERADO: Adiciona uma verificação de segurança
    if (this.isBrowser) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  getUserData(): UserData | null {
    // <-- ALTERADO: Adiciona uma verificação de segurança
    if (this.isBrowser) {
      const userData = localStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }
  
  isAuthenticated(): boolean {
    return this.hasToken();
  }

  private saveAuthData(data: AuthResponseData): void {
 
    if (this.isBrowser) {
      localStorage.setItem('authToken', data.Token);
      
      const userData: UserData = {
      email: data.email,
      nome: data.nome,
      perfil: data.perfil
    };

      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }
  
  private hasToken(): boolean {
    // <-- ALTERADO: Adiciona uma verificação de segurança
    if (this.isBrowser) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }
}