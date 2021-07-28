import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterContext, UserFilterStrategy } from 'src/app/core/pipes/strategy';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less'],
})
export class UserPanelComponent implements OnInit, OnDestroy {
  public search$ = this.userService.search$;
  public users$ = this.userService.users$;
  user: User | undefined;
  mode: EditorMode = EditorMode.None;

  subscriptions: Subscription[] = [];

  constructor(
    public userService: UserService,
    private editorService: EditorService
  ) {}

  ngOnInit(): void {
    
    this.subscriptions.push(
      this.search$.subscribe((event) => {
        const searchString = event.value;
        const filterContext = new FilterContext(new UserFilterStrategy());
        this.userService.filterEntity(searchString, filterContext);
      })
    );

    this.subscriptions.push(
      this.editorService.editorModeSubject$.subscribe((editorMode) => {
        this.mode = editorMode.mode;

        if (
          editorMode.mode == EditorMode.Edit &&
          editorMode.idEntity !== undefined
        ) {
          this.user = this.userService.getEntity(editorMode.idEntity);
        }

        if (editorMode.mode == EditorMode.Add) {
          this.user = undefined;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
