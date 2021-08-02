import { Component, OnInit, Input } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(
    private navService: NavigationService,
  ) { }

  ngOnInit() {}

}
