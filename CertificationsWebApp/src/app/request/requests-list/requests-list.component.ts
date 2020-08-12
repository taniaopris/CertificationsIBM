
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

// Models
import { RequestDTO, ApprovalStatus } from '../../model/request.model';

// Services
import { RequestService } from '../request.service';

@Component({
    selector: 'app-requests-list',
    templateUrl: './requests-list.component.html',
    styleUrls: ['./requests-list.component.scss'],
})
export class RequestsListComponent implements OnInit {

    requests: RequestDTO[];
    PENDING = ApprovalStatus.Pending;
//
    _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredRequests = this.listFilter ? this.performFilter(this.listFilter) : this.requests;
    }
  
    filteredRequests: RequestDTO[] = [];
//
    constructor(
        private requestService: RequestService
    ) { }

    ngOnInit(): void {
        this.getAllRequests();
        //
        this.filteredRequests = this.requests;
        //
    }

    getAllRequests(): void {
        this.requestService.getAllRequests().subscribe(res => this.requests = res);
    }

    approve(request: RequestDTO): void {

        this.requestService.updateStatus(request.id, ApprovalStatus.Approved).subscribe(res => console.log(res));
    }

    reject(request: RequestDTO): void {

      this.requestService.updateStatus(request.id, ApprovalStatus.Rejected).subscribe(res => console.log(res));
    }
//
    performFilter(filterBy: string): RequestDTO[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.requests.filter((request: RequestDTO) =>
          request.certificationTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
      //
}
