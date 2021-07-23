import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { AppSearchComponent } from './app-search/app-search.component';



@NgModule({
  declarations: [
    AppListComponent,
    AppSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppListComponent,
    AppSearchComponent
  ]
})
export class CoreModule { }
