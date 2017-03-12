import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { GameButtonsComponent } from '../../components/gameButtons.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taps = 0;
  presses = 0;
  gameStatus = '';

  constructor(public navCtrl: NavController) {}

  onReset(type: string) {
    switch (type) {
      case 'taps':
        this.taps = 0;
      break;
      case 'presses':
        this.presses = 0;
      break;
      case 'all':
        this.taps = 0;
        this.presses = 0;
      break;
    }
  }

  onIncrement(type: string) {
    switch (type) {
      case 'tap':
        this.taps++;
      break;
      case 'press':
        this.presses++;
      break;
    }
  }

  didWin() {
    return this.taps == 2 && this.presses == 4;
  }
}
