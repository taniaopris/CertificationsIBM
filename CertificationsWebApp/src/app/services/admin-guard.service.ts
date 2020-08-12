import { RouteGuardService } from './route-guard.service';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private loginService: LoginService) { }


// tslint:disable-next-line: typedef
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      return this.loginService.isAdmin();
}

}
