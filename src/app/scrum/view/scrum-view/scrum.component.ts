import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrum-view',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.scss']
})
export class ScrumComponent implements OnInit{

  public showDaily: boolean;
  public showPlanning: boolean;
  public showRetro: boolean;
  public showMySprint: boolean;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.showDaily = true;
    this.showPlanning = false;
    this.showRetro = false;
    this.showMySprint = false;
  }

  public handleVisibilityTabs(path: string) {
    switch (path) {
      case 'daily':
        this.showDaily = true;
        this.showPlanning = false;
        this.showRetro = false;
        this.showMySprint = false;
        break;
      case 'planning':
          this.showDaily = false;
          this.showPlanning = true;
          this.showRetro = false;
          this.showMySprint = false;
          break;
      case 'retro':
          this.showDaily = false;
          this.showPlanning = false;
          this.showRetro = true;
          this.showMySprint = false;
          break;
      case 'mySprint':
        this.showDaily = false;
        this.showPlanning = false;
        this.showRetro = false;
        this.showMySprint = true;
        break;
    }
  }


}
