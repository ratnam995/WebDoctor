import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from "@angular/platform-browser";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { LoginModule } from "./login/login.module";
import { SignupModule } from "./signup/signup.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './shared/services/http-service';
import { NotificationService } from './shared/services/notification-service';
import { AuthenticationService } from './shared/services/authentication-service';
// import { DoctorAddEditComponent } from './src/app/doctor-add-edit/doctor-add-edit.component';
// import { DashboardComponent } from './dashboard/src/app/dashboard/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastModule.forRoot(),
    // Http,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    DashboardModule
    // NgbModule.forRoot()
  ],
  declarations: [AppComponent],
  providers:[ HttpService, NotificationService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
