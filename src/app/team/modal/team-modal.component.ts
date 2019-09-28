import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Member } from '../interfaces/team-member.interface';

@Component({
    selector: 'app-team-modal',
    templateUrl: './team-modal.component.html',
    styleUrls: ['./team-modal.component.scss']
  })
  export class TeamModal {

    constructor(
      public dialogRef: MatDialogRef<TeamModal>,
      @Inject(MAT_DIALOG_DATA) public data: Member) {}

    onCloseClick(): void {
      this.dialogRef.close();
    }

    sendMessage(text) {
      this.dialogRef.close({event: text});
    }

    comeToMe() {
      this.dialogRef.close({event: 1});
    }

}
