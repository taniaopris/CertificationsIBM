import { RequestDTO, Quarter, ApprovalStatus } from '../model/request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestService {
    baseUrl = 'http://localhost:8080/api/requests/'

    constructor(private http: HttpClient) { }

    // TO BE DELETED AFTER LINK TO BACKEND

    requests: RequestDTO[] = [
        new RequestDTO(1, Quarter.Q1, 'Name1', 'Title1', 'Category1', ApprovalStatus.Approved, 100, 'Justification1'),
        new RequestDTO(2, Quarter.Q2, 'Name2', 'Title2', 'Category2', ApprovalStatus.Approved, 200, 'Justification2'),
        new RequestDTO(3, Quarter.Q3, 'Name3', 'Title3', 'Category3', ApprovalStatus.Approved, 300, 'Justification3')
    ];

    public getRequestById(id: number): Observable<RequestDTO> {
        return this.http.get<RequestDTO>(this.baseUrl + id)
    }

    public getAllRequests(): Observable<RequestDTO[]> {
        return of(this.requests);
    }

    public addRequest(request: RequestDTO): void {
        request.id = this.requests.length + 1;
        this.requests.push(request);
    }

    public updateRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.put<RequestDTO>(this.baseUrl + request.id, request)
    }

    public deleteRequest(id: number): any {
        return this.http.delete(this.baseUrl + id)
    }

    public approveRequest(request: RequestDTO): void {
        let r = this.requests.find(r => r.id === request.id);
        r.approvalStatus = ApprovalStatus.Approved;
    }

    public rejectRequest(request: RequestDTO): void {
        let r = this.requests.find(r => r.id === request.id);
        r.approvalStatus = ApprovalStatus.Rejected;
    }

    // TO BE DELETED AFTER LINK TO BACKEND

    // public getRequestById(id: number): Observable<RequestDTO> {
    //     return this.http.get<RequestDTO>(this.baseUrl + id)
    // }

    // public getAllRequests(): Observable<RequestDTO[]> {
    //     return this.http.get<RequestDTO[]>(this.baseUrl + 'all')
    // }

    // public addRequest(request: RequestDTO): Observable<RequestDTO> {
    //     return this.http.post<RequestDTO>(this.baseUrl, request)
    // }

    // public updateRequest(request: RequestDTO): Observable<RequestDTO> {
    //     return this.http.put<RequestDTO>(this.baseUrl + request.id, request)
    // }

    // public deleteRequest(id: number): any {
    //     return this.http.delete(this.baseUrl + id)
    // }

    // public approveRequest(request: RequestDTO): Observable<RequestDTO> {
    //     return this.http.put<RequestDTO>(this.baseUrl + request.id + '/approve', request)
    // }

    // public rejectRequest(request: RequestDTO): Observable<RequestDTO> {
    //     return this.http.put<RequestDTO>(this.baseUrl + request.id + '/reject', request)
    // }

    //method for filter?
}