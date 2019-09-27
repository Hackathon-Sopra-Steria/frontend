import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-auth-view-component',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthViewComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private readonly _loginService: LoginService) {}

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', Validators.required, Validators.email],
            password: ['', Validators.required]
        })
    }

    submit(): void {
        if(this.loginForm.valid) {
            this._loginService.login(this.loginForm.value).subscribe(response => {
                console.log(response);
            });
        }
    }
}
