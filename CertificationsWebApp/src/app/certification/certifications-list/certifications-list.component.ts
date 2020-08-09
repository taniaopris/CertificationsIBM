import { Component, OnInit } from '@angular/core';
import { CertificationDTO } from '../../model/certification.model';
import { CertificationService } from '../certification.service';
import { MatDialog } from '@angular/material/dialog';
import { NewRequestDialogComponent } from '../../request/new-request-dialog/new-request-dialog.component';

@Component({
    selector: 'app-certifications-list',
    templateUrl: './certifications-list.component.html',
    styleUrls: ['./certifications-list.component.scss'],
})
export class CertificationsListComponent implements OnInit {

    certifications: CertificationDTO[];

    constructor(
        private certificationService: CertificationService,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.getAllCertifications();
    }

    getAllCertifications(): void {
        this.certificationService.getAllCertifications().subscribe(res => this.certifications = res)
    }

    openNewRequestDialog(certification: CertificationDTO): void {
        this.dialog.open(NewRequestDialogComponent, {
            data: {
                certification: certification
            }
        });
    }
}
