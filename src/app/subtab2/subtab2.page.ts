import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-subtab2',
  templateUrl: './subtab2.page.html',
  styleUrls: ['./subtab2.page.scss'],
})
export class Subtab2Page {

  constructor(
    private navService: NavigationService,
  ) {}

  ionViewWillEnter() {
    this.navService.log();
  }

  ionViewWillLeave() {
    this.navService.pop();
  }

}
