import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { clearAuthentication, isAuthenticated } from './authManager';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAuthenticatedUser: boolean = isAuthenticated();
    if (!isAuthenticatedUser) {
      window.alert("You can't access without login..!!");
      this.router.navigate(['login']);
      clearAuthentication();
    }
    
    return true;
  }
  
}
