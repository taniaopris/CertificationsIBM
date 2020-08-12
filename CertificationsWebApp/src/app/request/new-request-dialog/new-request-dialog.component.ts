
import { Component, Inject } from '@angular/core';
import { Quarter, RequestDTO, ApprovalStatus } from '../../model/request.model';
import { RequestService } from '../request.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-new-request-dialog',
    templateUrl: './new-request-dialog.component.html',
    styleUrls: ['./new-request-dialog.component.scss'],
})
export class NewRequestDialogComponent {

    quarterList = [
        {
            text: 'Q1',
            value: Quarter.Q1
        },
        {
            text: 'Q2',
            value: Quarter.Q2
        },
        {
            text: 'Q3',
            value: Quarter.Q3
        },
        {
            text: 'Q4',
            value: Quarter.Q4
        }
    ]

    name: string;
    businessJustification: string;
    quarter: Quarter;

    constructor(
        private requestService: RequestService,
        public dialogRef: MatDialogRef<NewRequestDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    send(): void {
        const request = new RequestDTO( this.quarter, this.name, this.data.certification.title,
            this.data.certification.category, ApprovalStatus.Pending, this.data.certification.cost,
            this.businessJustification);

        console.log(request);
        let id;
        const name = sessionStorage.getItem('USER');
        this.requestService.getId(name).subscribe(res =>
          {
            id = res;
            this.requestService.addRequest(request , id, this.data.certification.id).subscribe(res => console.log(res));
            this.dialogRef.close();
          });

    }
}
