import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsListComponent } from './certification/certifications-list/certifications-list.component';
import { RequestsListComponent } from './request/requests-list/requests-list.component';
import { MyRequestsComponent } from './request/myrequests/myrequests.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/certifications',
        pathMatch: 'full'
    },
    {
        path: 'certifications',
        component: CertificationsListComponent
    },
    {
        path: 'requests',
        component: RequestsListComponent
    },
    {
        path: 'myrequests',
        component: MyRequestsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
