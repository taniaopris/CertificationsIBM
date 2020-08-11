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
        const request = new RequestDTO(0, this.quarter, this.name, this.data.certification.title,
            this.data.certification.category, ApprovalStatus.Pending, this.data.certification.cost,
            this.businessJustification);

        //this.requestService.addRequest(request);

        this.dialogRef.close();
    }
}
