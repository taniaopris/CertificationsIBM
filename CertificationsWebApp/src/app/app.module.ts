import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CertificationsListComponent } from './certification/certifications-list/certifications-list.component';
import { RequestsListComponent } from './request/requests-list/requests-list.component';
import { NewRequestDialogComponent } from './request/new-request-dialog/new-request-dialog.component';
import { MyRequestsComponent } from './request/myrequests/myrequests.component'

@NgModule({
    declarations: [
        AppComponent,
        CertificationsListComponent,
        RequestsListComponent,
        NewRequestDialogComponent,
        MyRequestsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatStepperModule
    ],
    providers: [
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
