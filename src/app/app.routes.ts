import { Routes } from '@angular/router';
import { ListaJuego } from './components/lista-juego/lista-juego';
import { DetalleJuego } from './components/detalle-juego/detalle-juego';

export const routes: Routes = [
  { path: '', redirectTo: 'lista-juegos', pathMatch: 'full' },
  { path: 'lista-juegos', component: ListaJuego },
  { path: 'detalle-juego/:nombre', component: DetalleJuego }
];
