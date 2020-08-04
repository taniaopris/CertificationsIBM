import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { RequestService } from '../request.service';
import { RequestDTO } from '../../model/request.model';


@Component({
  selector: 'app-request-element',
  templateUrl: './request-element.component.html',
  styleUrls: ['./request-element.component.scss'],
})
export class RequestElementComponent {


  @Output() requestAdded = new EventEmitter<RequestDTO>();
  @ViewChild('inputUserName', {static: false}) RequestInput;

  constructor(private requestService: RequestService) {}

  // tslint:disable-next-line:typedef
  addUserToArray(){
    this.requestService.addRequest(this.RequestInput.nativeElement.value).subscribe(res => this.requestAdded.emit(res));
  }

}
