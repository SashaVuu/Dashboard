import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPanelComponent } from './task/task-panel/task-panel.component';
import { UserPanelComponent } from './user/user-panel/user-panel.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'users', component: UserPanelComponent },
  { path: 'tasks', component: TaskPanelComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
