import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CertificationService } from '../certification.service';
import { CertificationDTO } from '../../model/certification.model';


@Component({
  selector: 'app-certification-element',
  templateUrl: './certification-element.component.html',
  styleUrls: ['./certification-element.component.scss'],
})
export class CertificationElementComponent {


  @Output() certificationAdded = new EventEmitter<CertificationDTO>();
  @ViewChild('inputCertification', {static: false}) CertificationInput;

  constructor(private certificationService: CertificationService) {}

  // tslint:disable-next-line:typedef
  addCertificationToArray(){
    this.certificationService.addCertification
    (this.CertificationInput.nativeElement.value).subscribe(res => this.certificationAdded.emit(res));
  }

}
