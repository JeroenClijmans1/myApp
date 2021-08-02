import { Component } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private navService: NavigationService,
  ) {}

  ionViewWillEnter() {
    this.navService.log();
  }

}
