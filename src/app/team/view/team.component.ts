import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-team-view',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers = [
    {
      id: 1,
      firstName: 'Bladi',
      lastName: 'del Barrio',
      workertype: 'backend',
      email: 'dsasjd@gmail.com',
      urlPhoto: 'https://c.stocksy.com/a/0w1500/z9/1199080.jpg?1569622763'
    },
    {
      id: 2,
      firstName: 'Bladi',
      lastName: 'del Barrio',
      workertype: 'backend',
      email: 'dsasjd@gmail.com',
      urlPhoto: 'http/sdasd'
    },
    {
      id: 3,
      firstName: 'Bladi',
      lastName: 'del Barrio',
      workertype: 'backend',
      email: 'dsasjd@gmail.com',
      urlPhoto: 'http/sdasd'
    },
    {
      id: 4,
      firstName: 'Bladi',
      lastName: 'del Barrio',
      workertype: 'backend',
      email: 'dsasjd@gmail.com',
      urlPhoto: 'http/sdasd'
    },
    {
      id: 5,
      firstName: 'Bladi',
      lastName: 'del Barrio',
      workertype: 'backend',
      email: 'dsasjd@gmail.com',
      urlPhoto: 'http/sdasd'
    },
  ];

    constructor(public dialog: MatDialog) { }


}