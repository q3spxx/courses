import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SearchComponent } from './search/search.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolboxComponent, SearchComponent, ActionsComponent],
  exports: [ToolboxComponent]
})
export class ToolboxModule { }
