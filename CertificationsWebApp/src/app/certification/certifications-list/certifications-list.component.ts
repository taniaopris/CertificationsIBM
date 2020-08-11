import { CertificationDTO } from './../../model/certification.model';
import { Component, OnInit } from '@angular/core';
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
        this.certificationService.getAllCertifications().subscribe(res => this.certifications=res);
    }

    openNewRequestDialog(certification: CertificationDTO): void {
        this.dialog.open(NewRequestDialogComponent, {
            data: {
                certification: certification
            }

        });
    }


    delete(id: number)
    {
      this.certificationService.deleteCertification(id).subscribe(res =>console.log(res));
    }

    isAdmin(): boolean
    {
      let user = sessionStorage.getItem('USER');
      if(user === 'admin') return true;
      else return false;
    }


}
