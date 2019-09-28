import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sprint-view',
    templateUrl: './mySprint.component.html',
    styleUrls: ['./mySprint.component.scss']
})
export class MySprintComponent implements OnInit {
    backlog = [{
        id: 1,
        title: 'HU1: Crear un buen proyecto ya',
        description: 'sfñskdfhsñdfhdsñf ohsdfiu ohsdof hs dh sih fsd fsdohfsdo ihfosd ihfios dhfosdi'
    },
    {
        id: 2,
        title: 'HU1: Crear un buen proyecto ya',
        description: 'sfñskdfhsñdfhdsñf ohsdfiu ohsdof hs dh sih fsd fsdohfsdo ihfosd ihfios dhfosdi'
    },
    {
        id: 3,
        title: 'HU1: Crear un buen proyecto ya',
        description: 'sfñskdfhsñdfhdsñf ohsdfiu ohsdof hs dh sih fsd fsdohfsdo ihfosd ihfios dhfosdi'
    }];

    constructor() { }

    ngOnInit() { }
}
