import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenereJoc } from '../../models/element.model';

@Component({
  selector: 'app-etiqueta-genere',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="getClaseGenere()">
      {{ categoria }}
    </span>
  `,
  styles: [`
    .badge {
      padding: 0.35em 0.65em;
      font-size: 0.75em;
      font-weight: 700;
      border-radius: 0.25rem;
      color: white;
      background-color: #6c757d;
    }
    .rpg { background-color: #0d6efd; }
    .accio { background-color: #dc3545; }
    .aventura { background-color: #198754; }
    .estrategia { background-color: #ffc107; color: #000; }
    .openworld { background-color: #fd7e14; }
    .sandbox { background-color: #6f42c1; }
  `]
})
export class EtiquetaGenereComponent {
  @Input() categoria: GenereJoc = 'RPG';

  getClaseGenere(): string {
    if (!this.categoria) return '';
    return this.categoria.toLowerCase().replace(/\s+/g, '');
  }
}