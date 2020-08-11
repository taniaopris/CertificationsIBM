import { CertificationDTO } from './../model/certification.model';
import { CertificationService } from './../certification/certification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  constructor(private certicationService: CertificationService) { }

  title: string;
  category: string;
  cost: number;
  ngOnInit(): void {
  }

  editCertification()
  {

  }

}
