import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Juego } from '../../model/juego';
import { Juegos } from '../../service/juegos';

@Component({
  selector: 'app-detalle-juego',
  imports: [RouterLink],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.scss'
})
export class DetalleJuego implements OnInit {
  juego: Juego | undefined;

  private route = inject(ActivatedRoute);
  private juegosService = inject(Juegos);

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.juego = this.juegosService.obtenerJuegoPorNombre(nombre);
  }
}
