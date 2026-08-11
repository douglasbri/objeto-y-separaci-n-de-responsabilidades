import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJuego } from './lista-juego';

describe('ListaJuego', () => {
  let component: ListaJuego;
  let fixture: ComponentFixture<ListaJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaJuego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJuego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
