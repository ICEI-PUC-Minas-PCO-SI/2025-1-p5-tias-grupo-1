import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common'; // formatDate continua útil
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DoacaoService, CreateDoacaoDto } from '../../services/doacao.service';


export interface Voluntario {
  id: number;
  nome: string;
  email: string;
}

export interface Doacao {
  id: number;
  valor: number;
  descricao: string;
  data: string;
  voluntario: Voluntario;
}

@Component({
  selector: 'app-doadores',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ModalComponent, ReactiveFormsModule],
  templateUrl: './doacoes.component.html',
  styleUrl: './doacoes.component.css'
})
export class DoacoesComponent implements OnInit {

  allDoacoes: Doacao[] = [];
  filteredDoacoes: Doacao[] = [];
  paginatedDoacoes: Doacao[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;
  searchTerm: string = '';
  isLoading: boolean = true;
  errorMessage: string | null = null;
  isModalVisible = false;

  newDoacaoForm: FormGroup;
  
  // --- NOVO: Propriedades para feedback do formulário ---
  formSubmitStatus: 'success' | 'error' | null = null;
  formSubmitMessage: string = '';

  constructor(private doacaoService: DoacaoService, private fb: FormBuilder) {
    this.newDoacaoForm = this.fb.group({
      nomeDoador: ['', Validators.required],
      emailDoador: ['', [Validators.required, Validators.email]],
      documentoDoador: ['', Validators.required],
      telefoneDoador: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(0.01)]],
      descricao: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
    this.loadDoacoes();
  }


  loadDoacoes(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.doacaoService.getDoacoes().subscribe({
      next: (data) => {
        this.allDoacoes = data;
        this.applyFilter(); // Inicia o filtro e a paginação com os dados da API
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar doações:', err);
        this.errorMessage = 'Não foi possível carregar os dados. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }

  onSaveDoacao(): void {
    this.formSubmitStatus = null;
    this.formSubmitMessage = '';

    if (this.newDoacaoForm.invalid) {
      this.newDoacaoForm.markAllAsTouched();
      this.formSubmitStatus = 'error';
      this.formSubmitMessage = 'Por favor, preencha todos os campos obrigatórios corretamente.';
      return;
    }

    const formData: CreateDoacaoDto = this.newDoacaoForm.value;

    this.doacaoService.createDoacao(formData).subscribe({
      next: (novaDoacao) => {
        this.formSubmitStatus = 'success';
        this.formSubmitMessage = `Doação de ${novaDoacao.voluntario.nome} registrada com sucesso!`;
        this.loadDoacoes();
        setTimeout(() => this.closeModal(), 2000);
      },
      error: (err) => {
        console.error('Erro ao criar doação:', err);
        this.formSubmitStatus = 'error';
        this.formSubmitMessage = 'Falha ao registrar a doação. Tente novamente.';
      }
    });
  }

  // --- LÓGICA DE BUSCA (Adaptada para os novos campos, incluindo o objeto aninhado) ---
  applyFilter(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredDoacoes = this.allDoacoes.filter(doacao => {
      const nomeDoadorMatch = doacao.voluntario.nome.toLowerCase().includes(term);
      const emailDoadorMatch = doacao.voluntario.email.toLowerCase().includes(term);
      const descricaoMatch = doacao.descricao.toLowerCase().includes(term);
      const valorMatch = doacao.valor.toString().includes(term);
      const dataMatch = formatDate(doacao.data, 'dd/MM/yyyy', 'en-US').includes(term);

      return nomeDoadorMatch || emailDoadorMatch || descricaoMatch || valorMatch || dataMatch;
    });
    this.currentPage = 1;
    this.setupPagination();
  }

  // --- LÓGICA DE PAGINAÇÃO E MÉTODOS DO MODAL (Permanecem os mesmos) ---
  setupPagination(): void {
    this.totalPages = Math.ceil(this.filteredDoacoes.length / this.itemsPerPage);
    this.updatePaginatedView();
  }

  updatePaginatedView(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDoacoes = this.filteredDoacoes.slice(startIndex, endIndex);
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

  adicionarDoacao(): void {
    this.isModalVisible = true;
    this.newDoacaoForm.reset();
    this.formSubmitStatus = null;
    this.formSubmitMessage = '';
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
