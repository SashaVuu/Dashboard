import { Component, OnDestroy, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { EditorMode } from './entities/editor';
import { Task } from './entities/task';
import { EditorService } from './services/editor.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'Dashboard';

  constructor() {
  }

  
}
