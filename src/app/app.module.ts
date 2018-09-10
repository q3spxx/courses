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
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authorisation/auth.interceptor';
import { StoreModule } from '@ngrx/store';

import { coursesReducer } from './courses-page/course-list/reducers/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './courses-page/course-list/effects/courses-effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      courses: coursesReducer
    }),
    EffectsModule.forRoot([CoursesEffects]),
    CoursesPageModule,
    LoginPageModule,
    AddCoursePageModule,
    NotFoundModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    AuthorisationService,
    AuthGuard,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
