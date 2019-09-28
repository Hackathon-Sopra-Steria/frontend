import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-view-component',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthViewComponent implements OnInit {
    @Output() emitLogin = new EventEmitter();

    public loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private readonly _loginService: LoginService, private _router: Router) {}

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    send(): void {
        if(this.loginForm.valid) {
            this._loginService.login(this.loginForm.value).subscribe(response => {
                console.log(response);
                localStorage.setItem('token', response);
                this.emitLogin.emit('logged');
            });
        }
    }
}
