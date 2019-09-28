import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumComponent } from './view/scrum.component';
import { ScrumRouting } from './scrum.routing.module';

@NgModule({
  declarations: [
    ScrumComponent
  ],
  imports: [
    CommonModule,
    ScrumRouting
  ]
})
export class ScrumModule { }
