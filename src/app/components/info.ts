import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-info',
    imports: [CommonModule],
    templateUrl: './info.html',
    styleUrls: ['./info.scss']
})
export class InfoComponent {
    @Input() posicionx: number = 0;
    @Input() posiciony: number = 0;
    @Input() tamano: number = 0;
    @Input() color: string = '';
    @Input() visible: boolean = true;
}
