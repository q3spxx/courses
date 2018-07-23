import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin = false;

  constructor() { }

  ngOnInit() {
  }

  login(): void {
    this.isLogin = true;
  }

  get message(): string {
    if ( this.isLogin ) {
      return 'you are logged in';
    } else {
      return 'you are logged out';
    }
  }

}
