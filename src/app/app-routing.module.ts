import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamModule } from './team/team.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => TeamModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
