import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [LoginPageComponent, AuthFormComponent],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
