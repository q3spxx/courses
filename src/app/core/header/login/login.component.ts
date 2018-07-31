import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../../interfaces/user';
import { AuthorisationService } from '../../../services/authorisation/authorisation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public isLogin = false;

  constructor(
    private authService: AuthorisationService
  ) { }

  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  login(): void {
    this.isLogin = true;
  }

  onLogout(): void {
    this.logout.emit();
  }

  get message(): string {
    if ( this.isLogin ) {
      return 'you are logged in';
    } else {
      return 'you are logged out';
    }
  }
}
