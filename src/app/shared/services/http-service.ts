import { Injectable } from "@angular/core";
import { Response, Http, Headers } from "@angular/http";
// import { AuthHttp, AuthConfig } from "angular2-jwt/angular2-jwt";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

// import { API_HOST } from "../config/api.config";

const API_HOST="http://localhost:8000";

@Injectable()
export class HttpService {
  service: any = {};
  authHttp: any = {};
  authenticatedAPI: boolean = true; //checks for authenticated http request (authHttp) or non-authenticated http request (http)

  constructor(
    protected http: Http,
    private router: Router
  ) {
  }

  get(url: string, elementID: any): Observable<any> {
    let headers = new Headers();
    headers.append('sessionID', localStorage.getItem("sessionID"));
    console.log("Inside http service get", url, elementID, headers);
    // this.service = this.authenticatedAPI ? this.authHttp : this.http;
    return this.http
      .get(`${API_HOST}/${url}/` + elementID, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  getAll(url: string): Observable<any> {
    let headers = new Headers();
    headers.append('sessionID', localStorage.getItem("sessionID"));
    console.log("Inside http service getall", url, headers);
    // this.service = this.authenticatedAPI ? this.authHttp : this.http;
    return this.http
      .get(`${API_HOST}/${url}/`, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  post(url: string, element: any): Observable<any>{
    let headers = new Headers();
    headers.append('sessionID', localStorage.getItem("sessionID"));
    console.log("Inside http service post", url, headers);
    return this.http
    .post(`${API_HOST}/${url}/`, element, {headers: headers})
    .map((response: Response) => {
      return response.json();
    })
    .catch(err => {
      console.log("Inside http store error", JSON.parse(JSON.stringify(err)));
    //   return this.handleErrorResponse(err);
      return Observable.throw(err.json());
    });
  }

  update(url: string, elementID: string, newElement: any): Observable<any>{
    let headers = new Headers();
    headers.append('sessionID', localStorage.getItem("sessionID"));
    console.log("Inside http service update", url, headers);
    return this.http
      .put(`${API_HOST}/api/${url}/` + elementID, newElement, {headers: headers})
      .map((response: Response) => {
        return response.json();
      })
      .catch(err => {
        // return this.handleErrorResponse(err);
        return Observable.throw(err.json());
      });
  }

  destroy(url: string, elementID: any): Observable<any> {
    let headers = new Headers();
    headers.append('sessionID', localStorage.getItem("sessionID"));
    console.log("Inside http service destroy", url, headers);
    // return Observable.throw('error');
    return this.http
      .delete(`${API_HOST}/${url}/` + elementID, {headers: headers})
      .map((response: Response) => {
        return response.json();
      })
      .catch(err => {
        console.log("Erre ye aya hai backend se", err);
          // return this.handleErrorResponse(err);
          return Observable.throw(err);
      });
  }
}