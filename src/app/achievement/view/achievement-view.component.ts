import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../services/achievement.service';
import { IAchievement } from '../interfaces/achievement.interface';

@Component({
    selector: 'app-achievement-view',
    templateUrl: './achievement-view.component.html',
    styleUrls: ['./achievement-view.component.scss']
})
export class AchievementViewComponent implements OnInit {

    public achievements: IAchievement[];

    constructor(private _achievementService: AchievementService) { }

    ngOnInit(): void {
        this._achievementService.getAchievements().subscribe(response => {
            this.achievements = response;
        });
    }
}
