import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { RequestDTO } from '../../model/request.model';
import { RequestService } from '../request.service';

@Component({
    selector: 'app-requests-list',
    templateUrl: './requests-list.component.html',
    styleUrls: ['./requests-list.component.scss'],
})
export class RequestsListComponent {
    requests: RequestDTO[];

    constructor(private requestService: RequestService) { }

    getAllCertifications(){
        this.requestService.getAllRequests().subscribe(res => this.requests = res)
      }
}
