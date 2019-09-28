import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clib-app';

  userLogged: boolean;

  constructor() {
    this.userLogged = false;
  }

  onEmitLogin(info: string){
    this.userLogged = true;
  }
}
