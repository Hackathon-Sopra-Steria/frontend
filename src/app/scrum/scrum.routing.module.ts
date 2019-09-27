import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrumComponent } from './view/scrum.component';

const routes: Routes = [
    {
        path: 'scrum',
        component: ScrumComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScrumRouting { }
