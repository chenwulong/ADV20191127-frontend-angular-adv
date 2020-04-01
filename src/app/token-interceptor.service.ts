import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
}) // Injectable
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      } // setHeaders
    }) // tokenizedRequest
    return next.handle(tokenizedRequest)
  } // intercept
} // TokenInterceptorService
