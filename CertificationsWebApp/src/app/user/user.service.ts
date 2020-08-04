import { RequestDTO } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
// @ts-ignore
export class UserService {
    baseUrl = 'http://localhost:8080/api/users/';

    constructor(private http: HttpClient) { }

    public getUserById(id: number): Observable<RequestDTO> {
        return this.http.get<RequestDTO>(this.baseUrl + id);
    }

    public getAllUsers(): Observable<RequestDTO[]> {
        return this.http.get<RequestDTO[]>(this.baseUrl + 'all');
    }

    public addUser(user: RequestDTO): Observable<RequestDTO> {
        return this.http.post<RequestDTO>(this.baseUrl, user);
    }

    public updateUser(user: RequestDTO): Observable<RequestDTO> {
        return this.http.put<RequestDTO>(this.baseUrl + user.id, user);
    }

    public deleteUser(id: number): any {
        return this.http.delete(this.baseUrl + id);
    }
}
