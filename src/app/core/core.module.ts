import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { LightningDirective } from './directives/lightning.directive';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppListComponent,
    AppSearchComponent,
    LightningDirective,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppListComponent,
    AppSearchComponent,
    LightningDirective,
    FilterPipe
  ]
})
export class CoreModule { }
