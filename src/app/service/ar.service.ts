import { Injectable, signal } from '@angular/core';
import { ArState } from '../model/ar-state.model';

@Injectable({ providedIn: 'root' })
export class ArService {
  state = signal<ArState>({ personaje: false, grande: false, clicks: 0 });

  togglePersonaje() {
    this.state.update(s => ({ ...s, personaje: !s.personaje }));
  }

  toggleGrande() {
    this.state.update(s => ({ ...s, grande: !s.grande, clicks: s.clicks + 1 }));
  }

  getScale(): string {
    const { personaje, grande } = this.state();
    const n = personaje ? (grande ? 3 : 1.5) : 0;
    return `${n} ${n} ${n}`;
  }
}
