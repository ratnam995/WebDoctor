import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpService } from '../services/http-service';
import { AuthenticationService } from '../services/authentication-service';
import { NotificationService } from '../services/notification-service';


@Injectable()
export /**
 * @brief      Checks if user is already logged and redirects to dashboard if authenticated
 */
class UserLoggedGuard implements CanActivate {
    constructor(
        private httpService: HttpService,
        private router: Router,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if((localStorage.getItem('sessionID') && localStorage.getItem('sessionID').length > 0)){
            if(Object.keys(this.authenticationService.currentUserData).length === 0){
                this.httpService.get('session/checkSession', localStorage.getItem("sessionID"))
                .subscribe(res=>{
                    this.authenticationService.currentUserData=JSON.parse(JSON.stringify(res.userData));
                    return true;
                },
                err=>{
                    this.httpService.destroy('session/deleteSession', localStorage.getItem("sessionID"))
                    .subscribe(res=>{
                        localStorage.removeItem('sessionID')
                        this.router.navigate(['login']);
                        this.notificationService.error("Session Expired. Please login again.", "Error");
                        return false;
                    });
                })
            }
            else{
                return true;
            }
        }

        return false;
    }
}