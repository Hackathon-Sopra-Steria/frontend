import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './view/team.component';
import { TeamRouting } from './view/team-routing.module';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRouting
  ]
})
export class TeamModule { }
