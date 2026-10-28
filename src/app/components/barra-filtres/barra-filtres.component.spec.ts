import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraFiltres } from './barra-filtres.component';

describe('BarraFiltres', () => {
  let component: BarraFiltres;
  let fixture: ComponentFixture<BarraFiltres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraFiltres],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraFiltres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
