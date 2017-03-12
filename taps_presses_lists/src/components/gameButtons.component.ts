import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-buttons',
  template: `
  <ion-grid>
    <ion-row>
      <ion-col col-4>
        <button block small ion-button color="danger" (click)="onReset('all')">Reset All</button>
      </ion-col>
      <ion-col col-4>
        <button block small ion-button color="danger" (click)="onReset('taps')">Reset "Taps"</button>
      </ion-col>
      <ion-col col-4>
        <button block small ion-button color="danger" (click)="onReset('presses')">Reset "Presses"</button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <button small block color="secondary" ion-button (tap)="onIncrement('tap')">Tap Here</button>
      </ion-col>
      <ion-col col-6>
        <button small block color="secondary" ion-button (press)="onIncrement('press')">Press Here</button>
      </ion-col>
    </ion-row>
  </ion-grid>
  `
})

export class GameButtonsComponent {
  @Output() didReset = new EventEmitter<string>();
  @Output() didIncrement = new EventEmitter<string>();

  onReset(type: string) {
    this.didReset.emit(type);
  }

  onIncrement(type: string) {
    this.didIncrement.emit(type);
  }
}
