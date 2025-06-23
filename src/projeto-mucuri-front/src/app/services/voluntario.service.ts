import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voluntario } from '../pages/voluntarios/voluntarios.component'; // Ajuste o caminho se necessário

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  private apiUrl = 'http://localhost:5142/api/Voluntarios';

  constructor(private http: HttpClient) { }

  /**
   * Busca a lista completa de voluntários da API.
   * O Interceptor de Autenticação adicionará o token automaticamente.
   */
  getVoluntarios(): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>(this.apiUrl);
  }
}
