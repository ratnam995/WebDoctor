import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/services/http-service';
import { AuthenticationService } from '../shared/services/authentication-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService,
    private authenticationService:AuthenticationService

  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.httpService.destroy('deleteSession', localStorage.getItem("sessionID"))
    .subscribe(res=>{
      console.log("Session Removed",res);
      localStorage.removeItem('sessionID')
      this.router.navigate(['login']);
    })
  }

  onViewDoctorListClick(){
    this.authenticationService.listOf="Doctor";
    this.router.navigate(['list']);
  }

  onViewPatientListClick(){
    this.authenticationService.listOf="Patient";
    this.router.navigate(['list']);
  }

  onAddDoctorClick(){
    this.authenticationService.addOf="Doctor";
    this.router.navigate(['add']);
  }

  onAddPatientClick(){
    this.authenticationService.addOf="Patient";
    this.router.navigate(['add']);
  }

}
