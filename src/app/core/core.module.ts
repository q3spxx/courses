import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CoreComponent } from './core/core.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    LoadingModule
  ],
  declarations: [CoreComponent, LoaderComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
