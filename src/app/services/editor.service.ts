import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EditorMode } from "../entities/editor";

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  editorModeSubject$ = new Subject<{ mode: EditorMode, idTask?: number }>();

  public changeEditorMode(mode: EditorMode, idTask?: number) {
    this.editorModeSubject$.next({ mode: mode, idTask: idTask });
  }

}
