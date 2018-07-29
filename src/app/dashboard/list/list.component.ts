import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http-service';
import { AuthenticationService } from '../../shared/services/authentication-service';
import { NotificationService } from '../../shared/services/notification-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list:any=[];
  constructor(
    private httpService: HttpService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    console.log("this.authen", this.authenticationService.currentUserData);
    let url="";
    if(this.authenticationService.listOf === "Doctor"){
      url= "user/fetchAllDoctors";
    }
    else if(this.authenticationService.listOf === "Patient"){
      url= "user/fetchAllPatients";
    }
    if(url.length && this.authenticationService.currentUserData.userRoleTag){
      this.httpService.post(url, {userRole: this.authenticationService.currentUserData.userRoleTag})
      .subscribe(res=>{
        console.log("HEREEEEEEEEE", res);
        if(res && res.length){
          this.list= res.map(singleRes=> singleRes);
        }
      })
    }
    else{
      this.httpService.destroy('session/deleteSession', localStorage.getItem("sessionID"))
      .subscribe(res=>{
        console.log("Session Removed",res);
        this.notificationService.error("Something went wrong", "Error");
        localStorage.removeItem('sessionID');
        this.router.navigate(['login']);
      })
    }
  }

}
