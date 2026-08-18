import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info';

@Component({            //puerta de entrada
    selector: 'app-figura',
    imports: [CommonModule, InfoComponent],
    templateUrl: './figura.html',
    styleUrls: ['./figura.scss']
})
export class FiguraComponent {
    posicionx: number = 100;
    posiciony: number = 100;
    tamano: number = 80;
    color: string = '#ff6b6b';
    visible: boolean = true;

    moverDerecha(): void {
        this.posicionx += 20;
    }
    moverIzquierda(): void {
        this.posicionx -= 20;
    }
    moverArriba(): void {
        this.posiciony -= 20;
    }
    moverAbajo(): void {
        this.posiciony += 20;
    }
    moverDiagonal(): void {
        this.posicionx += 20;
        this.posiciony += 20;
    }
    agrandar(): void {
        this.tamano += 20;
    }
    achicar(): void {
        this.tamano -= 20;
    }
    cambiarColor(nuevoColor: string): void {
        this.color = nuevoColor;
    }
    cambiarVisibilidad(): void {
        this.visible = !this.visible;
    }
}
