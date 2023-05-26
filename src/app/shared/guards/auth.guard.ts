import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService,
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (new Date() > this.loginService.getTokenExpirationDate()) {
      this.loginService.removeTokenFromLocalStorage();
      this.authService.setAuthorisation(false);
      this.router.navigate(['login']);
    } else {
      this.authService.setAuthorisation(true);
    }
    return this.authService.isAuthorised;
  }
}
