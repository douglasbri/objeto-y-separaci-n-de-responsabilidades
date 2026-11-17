import { Component, inject, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArService } from '../../service/ar.service';

@Component({
  selector: 'app-ar-scene',
  templateUrl: './ar-scene.html',
  styleUrl: './ar-scene.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArScene {
  ar = inject(ArService);
  scale = computed(() => this.ar.getScale());
}
