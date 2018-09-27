import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  providers: [
  ]
})

export class IntroPage {
  constructor(
    public navCtrl: NavController) {
    }

  home() {
    var self = this;
    // self.navCtrl.push("TabsPage", {});
    this.navCtrl.setRoot(TabsPage);
  }
}