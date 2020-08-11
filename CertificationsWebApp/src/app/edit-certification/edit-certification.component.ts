import { Router, ActivatedRoute } from '@angular/router';
import { CertificationsListComponent } from './../certification/certifications-list/certifications-list.component';
import { CertificationDTO } from './../model/certification.model';
import { CertificationService } from './../certification/certification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {

  constructor(private certificationService: CertificationService, private route: ActivatedRoute,private router: Router) { }

  title: string;
  category: string;
  cost: number;
  id: number;
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
  }

  editCertification()
  {

   let newCertification: CertificationDTO = new CertificationDTO(this.title, this.category, this.cost);

     this.certificationService.updateCertification(this.id,newCertification).subscribe(res =>
      {
        console.log(res);
        this.router.navigate(['/certifications']);
      });
  }

}
