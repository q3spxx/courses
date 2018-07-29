import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoursesPageModule } from './courses-page/courses-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { AppComponent } from './app.component';
import AuthorisationService from './authorisation/authorisation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    LoginPageModule
  ],
  providers: [AuthorisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
