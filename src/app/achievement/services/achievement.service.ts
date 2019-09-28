import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAchievement } from '../interfaces/achievement.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AchievementService {
    constructor(private _httpClient: HttpClient) {}

    getAchievements(): Observable<IAchievement[]> {
        return of([
            {
                id: '1',
                name: 'Comunicarte en persona',
                description: 'Has conseguido comunicarte en persona',
                iconPath: 'https://loremflickr.com/320/240',
                ruleCount: '0'
            },
            {
                id: '2',
                name: 'Comunicarte por telefono',
                description: 'Has conseguido comunicarte por telefono',
                iconPath: 'https://loremflickr.com/320/240',
                ruleCount: '0'
            },
            {
                id: '3',
                name: 'Mirad a los ojos',
                description: 'Has conseguido comunicarte a los ojos',
                iconPath: 'https://loremflickr.com/320/240',
                ruleCount: '0'
            },
            {
                id: '4',
                name: 'Daily master',
                description: 'El objetivo es conseguir',
                iconPath: 'https://loremflickr.com/320/240',
                ruleCount: '0'
            },
        ]);
    }
}