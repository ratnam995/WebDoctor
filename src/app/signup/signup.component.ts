import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/services/http-service';
import { NotificationService } from '../shared/services/notification-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userSignupForm: FormGroup;

  rolesObjArr:any=[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.httpService.getAll('fetchAllRoles').subscribe(roleRes=>{
      roleRes.map(singleRoleRes=>{
        this.rolesObjArr.push({
          roleName: singleRoleRes.name,
          roleTag: singleRoleRes.tag
        })
      })
    })
    this.userSignupForm= this.fb.group({
      userName: [''],
      userRoleTag: [''],
      userEmail: [''],
      userPhoneNum: [''],
      userAddress: [''],
      userPassword: ['']
  });
  }

  onSignupButtonClick(){
    this.httpService.post('addUser', this.userSignupForm.getRawValue())
    .subscribe(response=>{
      if(response.hasOwnProperty('success')){
        this.notificationService.success(response.success, "Success");
      }
      this.router.navigate(['login']);
    },
    (err)=>{
      this.notificationService.error(err.error, "Error");
    });
  }

  onBackButtonClick(){
    this.router.navigate(['login']);
  }

}
