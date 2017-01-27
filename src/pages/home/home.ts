import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlphaListPage } from '../alpha-list/alpha-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alphaListPage: Component;

  constructor(public navCtrl: NavController) {
    this.alphaListPage = AlphaListPage;
  }

}
