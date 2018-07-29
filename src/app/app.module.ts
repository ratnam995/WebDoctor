import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from "@angular/platform-browser";
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
import { UserLoggedGuard } from './shared/guards/user-logged-in-guard';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    SignupModule,
    DashboardModule
  ],
  declarations: [AppComponent],
  providers:[ HttpService, NotificationService, AuthenticationService, UserLoggedGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
