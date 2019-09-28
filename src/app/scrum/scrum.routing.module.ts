import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrumComponent } from './view/scrum-view/scrum.component';
import { DailyViewComponent } from './view/daily-view/daily-view.component';
import { PlanningViewComponent } from './view/planning-view/planning-view.component';
import { RetroViewComponent } from './view/retro-view/retro-view.component';


const routes: Routes = [
    {
        path: '',
        component: ScrumComponent,
        pathMatch: 'full'
    },
    {
        path: 'daily',
        component: DailyViewComponent,
        outlet: 'sub'
    },
    {
        path: 'planning',
        component: PlanningViewComponent,
        outlet: 'sub'
    },
    {
        path: 'retro',
        component: RetroViewComponent,
        outlet: 'sub'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScrumRouting { }
