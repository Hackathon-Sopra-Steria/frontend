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
    const endpoint = environment.api.API_URL + environment.api.team;
    return this.http.get<object>(endpoint);
  }

  postMemberMessage(message, id): Observable<object> {
    const endpoint = environment.api.API_URL + environment.api.messageTeam.replace(':id', id.toString());
    return this.http.post<object>(endpoint, message);
  }

}
