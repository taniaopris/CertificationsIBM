import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CertificationDTO} from '../../model/certification.model';
import { CertificationService } from '../certification.service';


@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss'],
})
export class CertificationListComponent {

  @Input() certification: CertificationDTO;
  @Output() certificationDeleted = new EventEmitter();

  constructor(private certificationService: CertificationService) {}

  // tslint:disable-next-line:typedef
  deleteCertification(certificationToDelete: CertificationDTO){
    this.certificationService.deleteCertification(certificationToDelete.id).subscribe(() => this.certificationDeleted.emit());

  }

}
