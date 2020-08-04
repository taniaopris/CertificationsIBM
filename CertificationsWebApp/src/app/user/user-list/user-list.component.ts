import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { RequestDTO } from '../../model/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  @Input() user: RequestDTO;
  @Output() userDeleted = new EventEmitter();

  constructor(private userService: UserService) {}

  // tslint:disable-next-line:typedef
  deleteUser(userToDelete: RequestDTO){
    this.userService.deleteUser(userToDelete.id).subscribe(() => this.userDeleted.emit());

  }

}
