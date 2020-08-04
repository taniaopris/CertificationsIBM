import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserElementComponent} from './user/user-element/user-element.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import {RequestElementComponent} from './request/request-element/request-element.component';
import {CertificationListComponent} from './certification/certification-list/certification-list.component';
import {CertificationElementComponent} from './certification/certification-element/certification-element.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserElementComponent,
    RequestListComponent,
    RequestElementComponent,
    CertificationListComponent,
    CertificationElementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
