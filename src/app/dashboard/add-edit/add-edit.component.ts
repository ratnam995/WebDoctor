import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../shared/services/http-service';
import { NotificationService } from '../../shared/services/notification-service';
import { AuthenticationService } from '../../shared/services/authentication-service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  userSignupForm: FormGroup;

  rolesObj:any={};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private httpService: HttpService,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.httpService.getAll('role/fetchAllRoles').subscribe(roleRes=>{
      roleRes.map(singleRoleRes=>{
        if(this.authenticationService.addOf === 'Doctor'){
          if(singleRoleRes.tag === "webDoc.doctor"){
            this.rolesObj=JSON.parse(JSON.stringify(singleRoleRes));
          }
        }
        else if(this.authenticationService.addOf === "Patient"){
          if(singleRoleRes.tag === "webDoc.patient"){
            this.rolesObj=JSON.parse(JSON.stringify(singleRoleRes));
          }
        }
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

  onSaveButtonClick(){
    let dataToBeSaved= this.userSignupForm.getRawValue();
    dataToBeSaved['userRoleTag']= this.rolesObj.tag;
    this.httpService.post('user/addUser', dataToBeSaved)
    .subscribe(response=>{
      if(response.hasOwnProperty('success')){
        this.notificationService.success(response.success, "Success");
      }
      this.router.navigate(['dashboard']);
    },
    (err)=>{
      this.notificationService.error(err.error, "Error");
    });
  }

  onBackButtonClick(){
    this.authenticationService.addOf='';
    this.router.navigate(['dashboard']);
  }

}
