import { Component } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navService: NavigationService,
  ) {}

  ionViewWillEnter() {
    this.navService.log();
  }

}
