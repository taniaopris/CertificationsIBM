import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'CertificationsWebApp';

    constructor(private router: Router) {
    }

    goToCertifications(): void {
        this.router.navigate(['/certifications']);
    }

    goToRequests(): void {
        this.router.navigate(['/requests']);
    }

    goToLogin(): void {
      this.router.navigate(['/login']);
  }
  goToLogout(): void
  {
    sessionStorage.removeItem('USER');
    this.router.navigate(['/login']);
  }

  goToMyRequests(): void
  {
    this.router.navigate(['/myRequests']);
  }

  isAdmin(): boolean
    {
      let user = sessionStorage.getItem('USER');
      if(user === 'admin') return true;
      else return false;
    }

   isLoggedIn(): boolean
   {
     let user = sessionStorage.getItem('USER');
     if(user != null) return true;
     else return false;
   }
}
