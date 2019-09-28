import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementViewComponent } from './view/achievement-view.component';


const routes: Routes = [
  {
    path: '',
    component: AchievementViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementRoutingModule { }
