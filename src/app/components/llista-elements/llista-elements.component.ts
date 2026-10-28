import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  template: `
    @if (elements && elements.length > 0) {
      <div class="row row-cols-1 row-cols-md-3 g-4">
        @for (item of elements; track item.id) {
          <div class="col">
            <app-targeta-element 
              [elemento]="item" 
              (seleccionar)="onSeleccionarItem($event)">
            </app-targeta-element>
          </div>
        }
      </div>
} @else {
      <div class="alert alert-warning text-center" role="alert" aria-live="assertive">
        No s'ha trobat cap element amb els filtres seleccionats
      </div>
    }
  `
})
export class LlistaElements {
  @Input() elements: Element[] = [];
  @Output() seleccionar = new EventEmitter<Element>();

  onSeleccionarItem(item: Element) {
    this.seleccionar.emit(item);
  }
}