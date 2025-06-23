import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Ajuste o caminho para onde você moveu sua interface Associado
import { Associado } from '../pages/associados/associados.component'; 

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  private apiUrl = 'http://localhost:5142/api/Associados';

  constructor(private http: HttpClient) { }

  /**
   * Busca a lista completa de associados da API.
   */
  getAssociados(): Observable<Associado[]> {
    return this.http.get<Associado[]>(this.apiUrl);
  }

  /**
   * NOVO: Cria um novo associado.
   * A API espera um objeto com os dados do associado e retorna o associado criado.
   * @param associadoData - Os dados do novo associado a serem enviados.
   */
  createAssociado(associadoData: Omit<Associado, 'id' | 'criadoEm' | 'modificadoEm'>): Observable<Associado> {
    return this.http.post<Associado>(this.apiUrl, associadoData);
  }
}
