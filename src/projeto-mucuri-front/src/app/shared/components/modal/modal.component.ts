import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // Recebe o título do componente pai (ex: "Adicionar Novo Associado")
  @Input() title: string = 'Modal';
  
  // Emite um evento para o componente pai quando o modal deve ser fechado
  @Output() close = new EventEmitter<void>();

  // Função chamada ao clicar no fundo ou no botão 'X'
  onClose() {
    this.close.emit();
  }
}