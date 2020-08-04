import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { RequestDTO} from '../../model/request.model';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
})
export class RequestListComponent {

  @Input() request: RequestDTO;
  @Output() requestDeleted = new EventEmitter();

  constructor(private requestService: RequestService) {}

  // tslint:disable-next-line:typedef
  deleteRequest(requestToDelete: RequestDTO){
    this.requestService.deleteRequest(requestToDelete.id).subscribe(() => this.requestDeleted.emit());

  }

}
