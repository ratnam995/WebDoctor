import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http-service';
import { AuthenticationService } from '../shared/services/authentication-service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginButtonClick(){
    console.log(this.userName, this.userPass);
    this.httpService.post("login", {userName: this.userName, password: this.userPass}).subscribe(res=>{
      console.log("HERE_>", res);
      if(res.hasOwnProperty('success')){
        // this.authenticationService.setSessionID(res.result);/
        localStorage.setItem('sessionID', res.result);
        this.authenticationService.currentUserData= JSON.parse(JSON.stringify(res.userData));
        this.router.navigate(['dashboard']);
      }
    },
    err=>{
      console.log("HEre err->", err);
    })
  }

  onSignupButtonClick(){
    this.router.navigate(['signup']);
  }

}
