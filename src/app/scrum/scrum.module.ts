import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumComponent } from './view/scrum-view/scrum.component';
import { ScrumRouting } from './scrum.routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DailyViewComponent } from './view/daily-view/daily-view.component';
import { PlanningViewComponent } from './view/planning-view/planning-view.component';
import { RetroViewComponent } from './view/retro-view/retro-view.component';
import { MySprintComponent } from './view/my-sprint/mySprint.component';

@NgModule({
  declarations: [
    ScrumComponent,
    DailyViewComponent,
    PlanningViewComponent,
    RetroViewComponent,
    MySprintComponent
  ],
  imports: [
    CommonModule,
    ScrumRouting,
    AngularMaterialModule
  ]
})
export class ScrumModule { }
