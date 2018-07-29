import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin = false;

  constructor() { }
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
  }

  login(): void {
    this.isLogin = true;
  }

  onLogout(): void {
    this.logout.emit();
  }
}
