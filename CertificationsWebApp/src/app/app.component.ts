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
}
