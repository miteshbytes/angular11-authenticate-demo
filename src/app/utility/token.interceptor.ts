import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { getBearerToken, isAuthenticated } from './authManager';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const accessToken = getBearerToken();
    const isAuthenticate = isAuthenticated();

    // set token in header if authenticated
    if (isAuthenticate) {
        request = request.clone({
        setHeaders: {
            Authorization: accessToken
        }
        });
    }

    return next.handle(request);
  }
}