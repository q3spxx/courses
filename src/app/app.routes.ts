import { Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page/courses-page.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page/add-course-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { EditCoursePageComponent } from './edit-course-page/edit-course-page/edit-course-page.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
    { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
    { path: 'courses/:id', component: EditCoursePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },
    { path: 'not-found-404', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found-404', pathMatch: 'full' }
];