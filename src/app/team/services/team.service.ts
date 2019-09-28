import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamMembers(): Observable<object> {
    const endpoint = environment.api.API_TEAMS_URL + '/all'
    return this.http.get<object>(endpoint);
  }

}
