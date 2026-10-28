import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { EtiquetaGenereComponent } from '../etiqueta-genere/etiqueta-genere.component';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, EtiquetaGenereComponent],
  template: `
    @if (elemento) {
      <div class="card h-100 shadow-sm border-0 p-3" (click)="onSeleccionar()" style="cursor: pointer;">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0 fw-bold">{{ elemento.titol }}</h5>
          <app-etiqueta-genere [categoria]="elemento.categoria"></app-etiqueta-genere>
           <div class="mt-auto pt-2 border-top">
            <div class="text-muted small mb-1">__________________________</div>
            </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .card { transition: transform 0.2s; }
    .card:hover { transform: translateY(-3px); background-color: #f8f9fa; }
  `]
})
export class TargetaElementComponent {
  @Input() elemento!: Element;
  @Output() seleccionar = new EventEmitter<Element>();

  onSeleccionar() {
    this.seleccionar.emit(this.elemento);
  }
}