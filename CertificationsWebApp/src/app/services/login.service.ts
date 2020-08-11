
import { LoginModel } from './../model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }


   login(username: string, password: string): Observable<LoginModel>
  {

    // tslint:disable-next-line: object-literal-shorthand

    return this.httpClient.post<LoginModel>(`https://localhost:8443/login`, {username, password});
  }

  isLoggedIn()
  {
     let user = sessionStorage.getItem('USER');
     if(user!=null)return true;
     else return false;
  }


}
