import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http-service';
import { AuthenticationService } from '../shared/services/authentication-service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification-service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public userName:string="";
  public userPass:string="";
  public disable:boolean= false;

  constructor(
    private httpService :HttpService,
    private authenticationService :AuthenticationService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onLoginButtonClick(){
    this.httpService.post("login", {userName: this.userName, password: this.userPass}).subscribe(res=>{
      if(res.hasOwnProperty('success')){
        localStorage.setItem('sessionID', res.result);
        this.authenticationService.currentUserData= JSON.parse(JSON.stringify(res.userData));
        this.router.navigate(['dashboard']);
      }
      else if(res.hasOwnProperty('error')){
        this.notificationService.error(res.error, "Error");
      }
    },
    err=>{
      console.log("Here err->", err);
    })
  }

  onSignupButtonClick(){
    this.router.navigate(['signup']);
  }

}
