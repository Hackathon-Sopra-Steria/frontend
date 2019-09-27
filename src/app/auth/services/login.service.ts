import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/login.interface';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {
    constructor(private _httpClient: HttpClient) {}

    private readonly _CONTEXT = '/login';

    login(payload: ILogin): Observable<any> {
        return this._httpClient.post(environment + this._CONTEXT, payload);
    }
}