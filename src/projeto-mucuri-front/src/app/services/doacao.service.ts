import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doacao } from '../pages/doacoes/doacoes.component'; // Ajuste o caminho se necessário

export interface CreateDoacaoDto {
  nomeDoador: string;
  emailDoador: string;
  documentoDoador: string;
  telefoneDoador: string;
  valor: number;
  descricao: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  // URL da sua API de doações
  private apiUrl = 'http://localhost:5142/api/Doacoes';

  constructor(private http: HttpClient) { }

  /**
   * Busca a lista completa de doações da API.
   * O Interceptor de Autenticação irá adicionar o token automaticamente.
   */
  getDoacoes(): Observable<Doacao[]> {
    return this.http.get<Doacao[]>(this.apiUrl);
  }

  createDoacao(doacaoData: CreateDoacaoDto): Observable<Doacao> {
    return this.http.post<Doacao>(this.apiUrl, doacaoData);
  }
}
