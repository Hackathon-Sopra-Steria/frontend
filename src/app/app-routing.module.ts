import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'scrum',
    loadChildren: () => import('./scrum/scrum.module').then(m => m.ScrumModule)
  },
  {
    path: 'achievement',
    loadChildren: () => import('./achievement/achievement.module').then(m => m.AchievementModule)
  },
  { path: '',
    redirectTo: 'team',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
