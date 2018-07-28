import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  public email = '';
  public password = '';

  constructor() { }

  ngOnInit() {
  }

  onLogin(): void {
    console.log(this.email, this.password);
  }

}
