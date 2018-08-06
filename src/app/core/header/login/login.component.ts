import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../../interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogin = false;

  @Input() user: User;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {}

  onLogout(): void {
    this.logout.emit();
  }
}
