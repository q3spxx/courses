import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin = false;

  constructor() { }
<<<<<<< HEAD
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
  }
=======

  ngOnInit() {}
>>>>>>> task3

  login(): void {
    this.isLogin = true;
  }

<<<<<<< HEAD
  onLogout(): void {
    this.logout.emit();
  }

=======
>>>>>>> task3
}
