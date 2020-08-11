import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

// Models
import { RequestDTO, ApprovalStatus } from '../../model/request.model';

// Services
import { RequestService } from '../request.service';

@Component({
    selector: 'app-myrequests',
    templateUrl: './myrequests.component.html',
    styleUrls: ['./myrequests.component.scss'],
})
export class MyRequestsComponent implements OnInit {

    requests: RequestDTO[];
    PENDING = ApprovalStatus.Pending;

    constructor(
        private requestService: RequestService
    ) { }

    ngOnInit(): void {
        this.getAllRequests();
    }

    getAllRequests(): void {
        this.requestService.getAllRequests().subscribe(res => this.requests = res);
    }

    edit(request: RequestDTO): void {
        this.requestService.updateRequest(request);
    }

    delete(request: RequestDTO): void {
        this.requestService.deleteRequest(request.id);
    }
}
