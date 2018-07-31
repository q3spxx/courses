import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppComponent } from './app.component';
import { AuthorisationService } from './services/authorisation/authorisation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesPageModule,
    LoginPageModule,
    AddCoursePageModule,
    NotFoundModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [AuthorisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
