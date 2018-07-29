import { Injectable } from "@angular/core";
import { Response, Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

const API_HOST = "http://localhost:8000";

@Injectable()
export class HttpService {
  constructor(protected http: Http, private router: Router) {}

  get(url: string, elementID: any): Observable<any> {
    let headers = new Headers();
    headers.append("sessionID", localStorage.getItem("sessionID"));
    return this.http
      .get(`${API_HOST}/${url}/` + elementID, { headers: headers })
      .map((response: Response) => {
        return response.json();
      });
  }

  getAll(url: string): Observable<any> {
    let headers = new Headers();
    headers.append("sessionID", localStorage.getItem("sessionID"));
    return this.http
      .get(`${API_HOST}/${url}/`, { headers: headers })
      .map((response: Response) => {
        return response.json();
      });
  }

  post(url: string, element: any): Observable<any> {
    let headers = new Headers();
    headers.append("sessionID", localStorage.getItem("sessionID"));
    return this.http
      .post(`${API_HOST}/${url}/`, element, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(err => {
        return Observable.throw(err.json());
      });
  }

  update(url: string, elementID: string, newElement: any): Observable<any> {
    let headers = new Headers();
    headers.append("sessionID", localStorage.getItem("sessionID"));
    return this.http
      .put(`${API_HOST}/api/${url}/` + elementID, newElement, {
        headers: headers
      })
      .map((response: Response) => {
        return response.json();
      })
      .catch(err => {
        return Observable.throw(err.json());
      });
  }

  destroy(url: string, elementID: any): Observable<any> {
    let headers = new Headers();
    headers.append("sessionID", localStorage.getItem("sessionID"));
    return this.http
      .delete(`${API_HOST}/${url}/` + elementID, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }
}
