import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-task-search',
  templateUrl: './ts-task-search.component.html',
  styleUrls: ['./ts-task-search.component.less']
})
export class TsTaskSearchComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  showAddEditor(){
    this.taskService.editorModeSubject.next(EditorMode.Add);
  }

}
