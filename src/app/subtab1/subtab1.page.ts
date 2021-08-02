import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-subtab1',
  templateUrl: './subtab1.page.html',
  styleUrls: ['./subtab1.page.scss'],
})
export class Subtab1Page {

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
