import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private loginService: LoginService) { }



// tslint:disable-next-line: typedef
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return this.loginService. isLoggedIn();
}

}
