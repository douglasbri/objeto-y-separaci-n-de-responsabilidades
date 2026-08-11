import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Juego } from '../../model/juego';
import { Juegos } from '../../service/juegos';

@Component({
  selector: 'app-lista-juego',
  imports: [RouterLink],
  templateUrl: './lista-juego.html',
  styleUrl: './lista-juego.scss'
})
export class ListaJuego {
  juegos: Juego[] = inject(Juegos).obtenerJuegos();
}
