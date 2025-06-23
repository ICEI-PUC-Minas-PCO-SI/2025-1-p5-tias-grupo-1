import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';

// --- NOVO: Importamos o serviço ---
import { VoluntarioService } from '../../services/voluntario.service';

// --- ALTERADO: A interface agora corresponde à API ---
export interface Voluntario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  documento: string;
  tipoVoluntariado: string;
  criadoEm: string;
  modificadoEm: string;
  doacoes: any[];
}

@Component({
  selector: 'app-voluntarios',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ModalComponent],
  templateUrl: './voluntarios.component.html',
  styleUrl: './voluntarios.component.css'
})
export class VoluntariosComponent implements OnInit {

  // --- Propriedades de Estado ---
  allVoluntarios: Voluntario[] = [];
  filteredVoluntarios: Voluntario[] = [];
  paginatedVoluntarios: Voluntario[] = [];

  // --- Propriedades de Paginação e Busca ---
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  searchTerm: string = '';
  
  // --- NOVO: Propriedades de feedback ---
  isLoading: boolean = true;
  errorMessage: string | null = null;
  
  isModalVisible = false;

  // --- NOVO: Injetamos o VoluntarioService ---
  constructor(private voluntarioService: VoluntarioService) {}

  ngOnInit(): void {
    // --- ALTERADO: Buscamos os dados reais ---
    this.loadVoluntarios();
  }

  // --- NOVO: Método para carregar dados da API ---
  loadVoluntarios(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.voluntarioService.getVoluntarios().subscribe({
      next: (data) => {
        this.allVoluntarios = data;
        this.applyFilter();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar voluntários:', err);
        this.errorMessage = 'Não foi possível carregar os dados. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }

  // --- LÓGICA DE BUSCA (Adaptada para os novos campos) ---
  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredVoluntarios = this.allVoluntarios.filter(voluntario => {
      const nomeMatch = voluntario.nome.toLowerCase().includes(term);
      const emailMatch = voluntario.email.toLowerCase().includes(term); // Usando email em vez de contato genérico
      const tipoMatch = voluntario.tipoVoluntariado.toLowerCase().includes(term);
      return nomeMatch || emailMatch || tipoMatch;
    });
    this.currentPage = 1;
    this.setupPagination();
  }

  // --- LÓGICA DE PAGINAÇÃO (Permanece a mesma) ---
  setupPagination(): void {
    this.totalPages = Math.ceil(this.filteredVoluntarios.length / this.itemsPerPage);
    this.updatePaginatedView();
  }

  updatePaginatedView(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedVoluntarios = this.filteredVoluntarios.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedView();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedView();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedView();
    }
  }
  
  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  
  adicionarVoluntario() { 
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
