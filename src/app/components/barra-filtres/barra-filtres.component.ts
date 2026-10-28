import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-filtres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card p-3 bg-light">
      <form #filtresForm="ngForm" class="row g-3">
        <div class="col-md-5">
          <label for="buscar" class="form-label">Cercar per títol:</label>
          <input 
            type="text" 
            id="buscar" 
            name="textoFiltro"
            class="form-control" 
            [(ngModel)]="textoFiltro" 
            #inputCerca="ngModel"
            required
            minlength="3"
            placeholder="Escriu mínim 3 caràcters...">
          
          @if (inputCerca.invalid && (inputCerca.dirty || inputCerca.touched)) {
            <div class="text-danger small mt-1">
              @if (inputCerca.errors?.['required']) {
                <span>El camp no compleix el minim de caracters</span>
              }
              @if (inputCerca.errors?.['minlength']) {
                <span>Cal introduir com a mínim 3 caràcters.</span>
              }
            </div>
          } 
        </div>

        <div class="col-md-4">
          <label for="categoria" class="form-label">Filtrar per categoria:</label>
          <select 
            id="categoria" 
            name="categoriaFiltro"
            class="form-select" 
            [(ngModel)]="categoriaFiltro">
            <option value="">Tots els gèneres</option>
            <option value="RPG">RPG</option>
            <option value="Acció">Acció</option>
            <option value="Aventura">Aventura</option>
            <option value="Estrategia">Estrategia</option>
            <option value="Openworld">Openworld</option>
            <option value="Sandbox">Sandbox</option>
          </select>
        </div>

        <div class="col-md-3 d-flex align-items-end gap-2">
          <button 
            type="button" 
            class="btn btn-primary w-50" 
            [disabled]="filtresForm.invalid"
            (click)="onFiltrar()">
            Aplicar
          </button>
          <button 
            type="button" 
            class="btn btn-secondary w-50" 
            (click)="netejarFiltres(filtresForm)">
            Netejar
          </button>
        </div>

      </form>
    </div>
  `
})
export class BarraFiltres {
  textoFiltro: string = '';
  categoriaFiltro: string = '';

  @Output() filtrar = new EventEmitter<{ texto: string, categoria: string }>();

  onFiltrar() {
    this.filtrar.emit({
      texto: this.textoFiltro,
      categoria: this.categoriaFiltro
    });
  }

  netejarFiltres(form: any) {
    this.textoFiltro = '';
    this.categoriaFiltro = '';
    form.resetForm(); 
    this.onFiltrar(); 
  }
}