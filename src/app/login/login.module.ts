import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    // NgbModule
  ],
  declarations: [LoginComponent],
  // exports: [LoginComponent]
})
export class LoginModule { }
