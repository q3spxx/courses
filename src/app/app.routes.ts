import { Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page/add-course-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'courses', component: CoursesPageComponent },
    { path: 'courses/new', component: AddCoursePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'not-found-404', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found-404', pathMatch: 'full' }
];