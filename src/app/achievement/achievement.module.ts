import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementViewComponent } from './view/achievement-view.component';
import { AchievementRoutingModule } from './achievement-routing.module';
import { AchievementService } from './services/achievement.service';

@NgModule({
  declarations: [AchievementViewComponent],
  imports: [
    CommonModule,
    AchievementRoutingModule
  ],
  providers: [
    AchievementService
  ]
})
export class AchievementModule { }
