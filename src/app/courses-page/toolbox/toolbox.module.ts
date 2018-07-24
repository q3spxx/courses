import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ToolboxComponent, ActionsComponent],
  exports: [ToolboxComponent]
})
export class ToolboxModule { }
