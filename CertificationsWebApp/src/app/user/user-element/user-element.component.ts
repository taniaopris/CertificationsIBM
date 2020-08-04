import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { RequestDTO } from '../../model/user.model';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.scss'],
})
export class UserElementComponent {

  @Output() userAdded = new EventEmitter<RequestDTO>();
  @ViewChild('inputUserName', {static: false}) userNameInput;

  constructor(private userService: UserService) {}

  // tslint:disable-next-line:typedef
  addUserToArray(){
    this.userService.addUser(this.userNameInput.nativeElement.value).subscribe(res => this.userAdded.emit(res));
  }

}
