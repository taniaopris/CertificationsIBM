import { Quarter } from './../model/request.model';
import { RequestService } from './../request/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificationDTO } from './../model/certification.model';
import { CertificationService } from './../certification/certification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) { }

  title: string;
  category: string;
  quarter: Quarter;
  businessJustification: string;

  ngOnInit(): void {


  }
}
