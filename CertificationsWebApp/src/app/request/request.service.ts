
import { RequestDTO, Quarter, ApprovalStatus } from '../model/request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestService {


    constructor(private http: HttpClient) { }


    requests: RequestDTO[];

    public getRequestByParticipantName(name: string): Observable<RequestDTO[]> {

        return this.http.get<Array<RequestDTO>>(`https://localhost:8443/api/requests/user/allRequests/${name}`);
    }

    public getAllRequests(): Observable<RequestDTO[]> {
        return this.http.get<Array<RequestDTO>>('https://localhost:8443/api/requests/admin/allRequests');
    }

    public addRequest(request: RequestDTO, name: string, certificationId : number): Observable<RequestDTO> {

       // tslint:disable-next-line: max-line-length
       let  userId = this.http.get<number>(`https://localhost:8443/api/users/user/${name}`);

       return this.http.post<RequestDTO>(`https://localhost:8443/api/requests/user/userId/${userId}/certificationId/${certificationId}`, request);
    }

    public updateStatus(id: number,approvalStatus: string)
    {
      return this.http.patch(`https://localhost:8443/api/requests/admin/updateRequestStatus/${id}`,{status: approvalStatus});
    }

    public updateRequest(request: RequestDTO) {

       // return this.http.put<RequestDTO>(this.baseUrl + request.id, request)
    }

    public deleteRequest(id: number): any {
       // return this.http.delete(this.baseUrl + id)
    }



}
