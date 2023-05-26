import { LoginService } from './../../auth/services/login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class NetworkErrorResolverService {
  constructor(
    private auth: LoginService,
    private router: Router,
  ) {}

  resolve(error: HttpErrorResponse){
    switch (error.status) {
      case 401:
        /* Token reset*/
        this.auth.removeTokenFromLocalStorage();

        this.router.navigate(['login']);
        break;
      case 403:
          /* Token reset*/
          this.auth.removeTokenFromLocalStorage();

        this.router.navigate(['login']);
      break;
      }
  }
}
