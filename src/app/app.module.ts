import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    UserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
