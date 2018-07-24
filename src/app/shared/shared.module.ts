import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BreadcrumbsComponent, SearchComponent],
  exports: [BreadcrumbsComponent, SearchComponent]
})
export class SharedModule { }
