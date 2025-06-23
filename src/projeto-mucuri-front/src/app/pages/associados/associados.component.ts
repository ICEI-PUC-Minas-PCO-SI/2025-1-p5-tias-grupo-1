import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AssociadoService } from '../../services/associado.service';

export interface Associado {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  descricaoAtividade: string;
  dataNascimento: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento?: string;
  cep: string;
  documento: string;
  criadoEm: string;
  modificadoEm: string;
}

@Component({
  selector: 'app-associados',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './associados.component.html',
  styleUrl: './associados.component.css'
})
export class AssociadosComponent implements OnInit {

  allAssociados: Associado[] = [];
  filteredAssociados: Associado[] = [];
  paginatedAssociados: Associado[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;
  searchTerm: string = '';
  isLoading: boolean = true;
  errorMessage: string | null = null;
  isModalVisible = false;

  newAssociadoForm: FormGroup;
  formSubmitStatus: 'success' | 'error' | null = null;
  formSubmitMessage: string = '';

  constructor(
    private associadoService: AssociadoService,
    private fb: FormBuilder
  ) {
    this.newAssociadoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      descricaoAtividade: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      documento: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['']
    });
  }

  ngOnInit(): void {
    this.loadAssociados();
  }

  loadAssociados(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.associadoService.getAssociados().subscribe({
      next: (data) => {
        this.allAssociados = data;
        this.applyFilter();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar associados:', err);
        this.errorMessage = 'Não foi possível carregar os dados. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }

  // --- ALTERADO: Adicionado um log de diagnóstico no início ---
  onSaveAssociado(): void {
    // Log para confirmar que a função foi chamada
    console.log('O método onSaveAssociado() foi executado.');

    this.formSubmitStatus = null; // Reseta o status a cada tentativa
    this.formSubmitMessage = '';

    if (this.newAssociadoForm.invalid) {
      this.newAssociadoForm.markAllAsTouched();
      
      // Fornece feedback visual sobre o erro de validação
      this.formSubmitStatus = 'error';
      this.formSubmitMessage = 'Por favor, preencha todos os campos obrigatórios corretamente.';
      
      // Log detalhado dos erros no console para depuração
      console.log('Formulário inválido. Erros:', this.getFormValidationErrors());
      
      return; // Continua a sair, mas agora com feedback
    }

    const formData = this.newAssociadoForm.value;

    this.associadoService.createAssociado(formData).subscribe({
      next: (novoAssociado) => {
        this.formSubmitStatus = 'success';
        this.formSubmitMessage = `Associado "${novoAssociado.nome}" criado com sucesso!`;
        this.loadAssociados();
        setTimeout(() => this.closeModal(), 1500);
      },
      error: (err) => {
        console.error('Erro ao criar associado:', err);
        this.formSubmitStatus = 'error';
        this.formSubmitMessage = 'Falha ao criar o associado. Verifique os dados e tente novamente.';
      }
    });
  }

  // --- NOVO: Função auxiliar para depurar erros de validação do formulário ---
  getFormValidationErrors() {
    const errors: { [key: string]: any } = {};
    Object.keys(this.newAssociadoForm.controls).forEach(key => {
      const controlErrors = this.newAssociadoForm.get(key)?.errors;
      if (controlErrors != null) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }

  adicionarAssociado(): void {
    this.isModalVisible = true;
    this.newAssociadoForm.reset();
    this.formSubmitStatus = null;
    this.formSubmitMessage = '';
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
  
  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredAssociados = this.allAssociados.filter(associado => 
      associado.nome.toLowerCase().includes(term) ||
      associado.email.toLowerCase().includes(term) ||
      associado.descricaoAtividade.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.setupPagination();
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(this.filteredAssociados.length / this.itemsPerPage);
    this.updatePaginatedView();
  }

  updatePaginatedView(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedAssociados = this.filteredAssociados.slice(startIndex, endIndex);
  }

  goToPage(page: number): void { if (page >= 1 && page <= this.totalPages) { this.currentPage = page; this.updatePaginatedView(); } }
  nextPage(): void { if (this.currentPage < this.totalPages) { this.currentPage++; this.updatePaginatedView(); } }
  prevPage(): void { if (this.currentPage > 1) { this.currentPage--; this.updatePaginatedView(); } }
  get pages(): number[] { return Array(this.totalPages).fill(0).map((x, i) => i + 1); }
}
