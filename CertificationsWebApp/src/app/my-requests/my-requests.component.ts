import { RequestService } from './../request/request.service';
import { RequestDTO } from './../model/request.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {


  requests: RequestDTO[];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.getRequests();
  }

  getRequests()
  {
    let name = sessionStorage.getItem('USER');
    this.requestService.getRequestByParticipantName(name).subscribe
    (
      response =>
      {
        this.requests = response;
        console.log(response);

      }
    );
  }

}
