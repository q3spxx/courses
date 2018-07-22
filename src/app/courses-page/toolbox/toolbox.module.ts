import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { SearchComponent } from './search/search.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ToolboxComponent, SearchComponent, ActionsComponent],
  exports: [ToolboxComponent]
})
export class ToolboxModule { }
