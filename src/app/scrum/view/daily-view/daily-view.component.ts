import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DailyService } from '../../services/daily.service';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-daily-view',
    templateUrl: './daily-view.component.html',
    styleUrls: ['./daily-view.component.scss']
})
export class DailyViewComponent implements OnInit {

    public messages = [];
    public messageForm: FormGroup;

    constructor(private _dailyService: DailyService, private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.getMessages();
        this.messageForm = this._formBuilder.group({
            message: ['']
        })
    }

    public getMessages(): void {
        this._dailyService.getMessages().subscribe(response => {
            this.messages = response;
        });
    }

    public send() {
        this.messages.push(this.createNewMessage());
    }

    public createNewMessage() {
        return {
            id: this.messages.length,
            member: 'Iván',
            message: this.messageForm.controls.message.value
        }
    }
}
