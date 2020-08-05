import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CertificationDTO } from '../../model/certification.model';
import { CertificationService } from '../certification.service';

@Component({
    selector: 'app-certifications-list',
    templateUrl: './certifications-list.component.html',
    styleUrls: ['./certifications-list.component.scss'],
})
export class CertificationsListComponent {
    certifications: CertificationDTO[];

    constructor(private certificationService: CertificationService) { }

    getAllCertifications(){
        this.certificationService.getAllCertifications().subscribe(res => this.certifications = res)
      }
}
