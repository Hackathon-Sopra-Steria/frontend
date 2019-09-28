import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './view/team.component';
import { TeamRouting } from './team-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TeamModal } from './modal/team-modal.component';
@NgModule({
  declarations: [
    TeamComponent,
    TeamModal
  ],
  imports: [
    CommonModule,
    TeamRouting,
    AngularMaterialModule
  ],
  entryComponents: [ TeamModal ]
})
export class TeamModule { }
