import { UserDTO } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:8080/api/users/'

    constructor(private http: HttpClient) { }

    public getUserById(id: number): Observable<UserDTO> {
        return this.http.get<UserDTO>(this.baseUrl + id)
    }

    public getAllUsers(): Observable<UserDTO[]> {
        return this.http.get<UserDTO[]>(this.baseUrl + 'all')
    }

    public addUser(user: UserDTO): Observable<UserDTO> {
        return this.http.post<UserDTO>(this.baseUrl, user)
    }

    public updateUser(user: UserDTO): Observable<UserDTO> {
        return this.http.put<UserDTO>(this.baseUrl + user.id, user)
    }

    public deleteUser(id: number): any {
        return this.http.delete(this.baseUrl + id)
    }
}