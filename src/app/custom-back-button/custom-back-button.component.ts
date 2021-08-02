import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-custom-back-button',
  templateUrl: './custom-back-button.component.html',
  styleUrls: ['./custom-back-button.component.scss'],
})
export class CustomBackButtonComponent implements OnInit {

  constructor(
    private navService: NavigationService,
  ) { }

  ngOnInit() {}

  private navigateBack() {
    this.navService.navigatePreviousPage();
  }

}
