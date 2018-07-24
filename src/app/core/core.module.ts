import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
