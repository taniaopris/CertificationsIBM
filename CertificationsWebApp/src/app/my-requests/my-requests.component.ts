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
  businessJustification: string;
  Clicked = false;
  id: number;

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

  edit(request: RequestDTO): void {

    this.Clicked = true;
    this.requestService.updateBusinessJustification(request.id,this.businessJustification).subscribe(res =>
      {
        console.log(res);
        this.Clicked=false;
        this.getRequests();
      });
}

   delete(request: RequestDTO): void {

    this.requestService.deleteRequest(request.id).subscribe(res =>
      {
        console.log(res);
        this.getRequests();
      });
}


isPending(request: RequestDTO):boolean
{
   // tslint:disable-next-line: curly
   if(request.approvalStatus==='pending')return true;
   else return false;
}

isClicked():boolean
{
  return this.Clicked;
}

clickOn(request: RequestDTO)
{

  this.id = request.id;
  this.Clicked=true;
}

isSelected(request: RequestDTO)
{
  return this.id == request.id;
}





}
