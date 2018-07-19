import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { FooterModule } from './footer/footer.module';
import { CourseListModule } from './course-list/course-list.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BreadcrumbsModule,
    ToolboxModule,
    CourseListModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
