import { EditCertificationComponent } from './edit-certification/edit-certification.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { RouteGuardService } from './services/route-guard.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsListComponent } from './certification/certifications-list/certifications-list.component';
import { RequestsListComponent } from './request/requests-list/requests-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'certifications',
        component: CertificationsListComponent,
        canActivate : [RouteGuardService]
    },
    {
        path: 'requests',
        component: RequestsListComponent,
        canActivate : [RouteGuardService]
    },

    {
      path: 'login',
      component: LoginComponent
    },

    {
      path: 'myRequests',
      component: MyRequestsComponent
    },
    {
      path: 'editCertification/:id',
      component: EditCertificationComponent
    },

    {
      path: '**',
      component: LoginComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
