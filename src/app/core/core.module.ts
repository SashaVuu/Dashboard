import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { LightningDirective } from './directives/lightning.directive';



@NgModule({
  declarations: [
    AppListComponent,
    AppSearchComponent,
    LightningDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppListComponent,
    AppSearchComponent,
    LightningDirective
  ]
})
export class CoreModule { }
