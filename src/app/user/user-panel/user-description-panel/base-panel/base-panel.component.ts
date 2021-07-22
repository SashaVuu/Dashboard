import { Component, Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorMode } from 'src/app/entities/editor';
import { Specialization, User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';

@Directive({
  selector: 'app-base-panel'
})
export class BasePanelComponent implements OnChanges {

  @Input() user?: User;
  
  modes = EditorMode;
  specializations = Specialization;
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(""),
      surname: new FormControl(""),
      specialization: new FormControl(Specialization.QAEngineer)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.task) {
      this.updateUserForm(this.user);
    }
  }

  private updateUserForm(user: User | undefined) {
    this.userForm.patchValue({
      id: user?.id,
      name: user?.name,
      surname: user?.surname,
      specializations: user?.specialization
    });
  }

}