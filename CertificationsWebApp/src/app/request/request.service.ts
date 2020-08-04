import { RequestDTO } from '../model/request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
// @ts-ignore
export class RequestService {
    baseUrl = 'http://localhost:8080/api/requests/';

    constructor(private http: HttpClient) { }

    public getRequestById(id: number): Observable<RequestDTO> {
        return this.http.get<RequestDTO>(this.baseUrl + id);
    }

    public getAllRequests(): Observable<RequestDTO[]> {
        return this.http.get<RequestDTO[]>(this.baseUrl + 'all');
    }

    public addRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.post<RequestDTO>(this.baseUrl, request);
    }

    public updateRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.put<RequestDTO>(this.baseUrl + request.id, request);
    }

    public deleteRequest(id: number): any {
        return this.http.delete(this.baseUrl + id);
    }

    public approveRequest(request: RequestDTO): Observable<RequestDTO> {
        return this.http.put<RequestDTO>(this.baseUrl + request.id + '/approve', request);
    }

    // method for filter?
}
