import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DailyService {
    constructor() { }

    public getMessages() {
        return of([
            {
                id: '1',
                member: 'Claudia',
                message: 'He acabado la HU-21'
            },
            {
                id: '2',
                member: 'Bladi',
                message: 'Me he bloqueado con la HU-22'
            }
        ]);
    }

    public sendMessage(){}
}