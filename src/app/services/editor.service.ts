import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EditorMode } from "../entities/editor";

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  editorModeSubject$ = new Subject<{ mode: EditorMode, idEntity?: number }>();

  public changeEditorMode(mode: EditorMode, idEntity?: number) {
    this.editorModeSubject$.next({ mode: mode, idEntity: idEntity });
  }

}
