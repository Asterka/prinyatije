import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { NetworkErrorResolverService } from '../services/network-error-resolver.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly loginService: LoginService,
    public networkResolver: NetworkErrorResolverService
  ) {
    //FETCH API PATCH
    (() => {
      const {fetch: originalFetch} = window;
      window.fetch = async (input, init = {}) => {
        try {
          const newHeaders = new Headers();
          let token = localStorage.getItem('token');
          if (token) {
            newHeaders.set('Authorization', token);
          }
          return await originalFetch(`${input}`, {
            ...init,
            headers: newHeaders,
          });
        } catch (error) {
          console.error(error);
          throw error;
        }
      };
    })();
  }


  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(req)).pipe(
      tap(
        (event) => {},
        (error: HttpErrorResponse) => {
          console.error(JSON.stringify(error) + ': interceptor error');
          if (error.status) {
            this.networkResolver.resolve(error);
          }
        }
      )
    );
  }

  private addAuthToken(req: HttpRequest<unknown>): HttpRequest<unknown> {
    const token = this.loginService.getTokenFromLocalStorage();

    if (token !== null) {
      return req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return req;
  }
}
