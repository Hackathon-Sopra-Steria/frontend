import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TeamModal } from '../modal/team-modal.component';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
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

  constructor (
    public modal: MatDialog,
    public teamService: TeamService
  ) {}

  ngOnInit() {
    // this.teamService.getTeamMembers().subscribe((response: Member) => {
    //     this.teamMembers = response;
    // });
  }

  openDialog(id) {
    const memberTeam = this.teamMembers.find(function(member) {return member.id === id;});
    const dialogRef = this.modal.open(TeamModal, {
      width: '600px',
      data: {member: memberTeam}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result === 'string') {
        console.log(result);
        // this.teamService.postMemberMessage(result, id).subscribe((response: any) => {
        //   console.log(response);
        // });
      } else if (typeof result === 'number') {
        console.log(result);
        // this.teamService.getTeamMembers().subscribe((response) => {
        //   console.log(response);
        // });
      }
    });
  }



}