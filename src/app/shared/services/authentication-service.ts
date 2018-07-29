import { Injectable } from "@angular/core";
import { Response, Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { HttpService } from './http-service';

@Injectable()
export class AuthenticationService {

sessionID: string='';
_addOf: string='';
_listOf: string='';
_currentUserData:any={};

  constructor(
    protected http: Http,
    private router: Router,
    private httpService: HttpService
  ) {
  }
  set addOf(addOf: string){
    this._addOf=addOf;
  }
  get addOf(): string{
    return this._addOf;
  }

  set listOf(listOf: string){
    this._listOf=listOf;
  }
  get listOf(): string{
    return this._listOf;
  }

  set currentUserData(currentUserData: any){
    this._currentUserData=currentUserData;
  }
  get currentUserData(): any{
    return this._currentUserData;
  }
  
  setSessionID(sessID: string){
      this.sessionID= sessID;
  }

  getSessionID():string{
      return this.sessionID;
  }
}