import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/login.interface';
import { Observable, of } from 'rxjs';


@Injectable()
export class LoginService {
    constructor() {}

    private readonly _CONTEXT = '';

    login(payload: ILogin): Observable<any> {
        return of(environment.MOCK_TOKEN);
    }
}