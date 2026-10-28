import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// import del modelo y el mock de juegos
import { Element } from './models/element.model'; 
import { JOCS_MOCK } from './mocks/dades-mock'   

// import de los componentes hijos
import { BarraFiltres } from './components/barra-filtres/barra-filtres.component';
import { LlistaElements } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarraFiltres, LlistaElements],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  public app = 'Biblioteca de videojocs, tan desitjats, com jugats com existents, segons us';
  protected readonly title = signal('ioc-angular-gamevault-luismiguel-garcia');

  
  juegos = signal<Element[]>(JOCS_MOCK);
  juegosFiltrados = signal<Element[]>(JOCS_MOCK);

  jocSeleccionat: Element | null = null;

  dataActual: Date = new Date();


  onSeleccionarJuego(joc: Element) {
    this.jocSeleccionat = joc;
  }

onFiltrar(filtre: { texto: string, categoria: string }) {
    const filtrados = JOCS_MOCK.filter(juego => {
      const coincideTexto = !filtre.texto || juego.titol.toLowerCase().includes(filtre.texto.toLowerCase().trim());
      const coincideCategoria = !filtre.categoria || juego.categoria === filtre.categoria;
      
      return coincideTexto && coincideCategoria;
    });

    this.juegosFiltrados.set(filtrados);
  }

}