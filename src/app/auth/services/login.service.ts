import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthControllerService, JwtDto, SignInDto, UserDto, UsersControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loginDefaultService: AuthControllerService,
    private userService: UsersControllerService,
    private router: Router,
  ) { }

  login(credentials: SignInDto) {
    const userCredentials = {
      email: credentials.email.toLowerCase(),
      password: credentials.password,
    };

    this.loginDefaultService.signIn(userCredentials).subscribe((response: JwtDto) => {
      this.saveTokenToLocalStorage(response.accessToken as string);
      this.router.navigate(['profile']);
    });
  }

  saveTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem('token');
  }

  getTokenExpirationDate(): Date {
    if (this.getTokenFromLocalStorage()) {
      // TODO: remove '000' adding when backend will start sending milliseconds
      return new Date(this.getTokenData().exp + '000');
    }
    return new Date(0);
  }

  getTokenData() {
    return JSON.parse(atob(<string>this.getTokenFromLocalStorage()?.split('.')[1]));
  }

  getUser() {
    this.userService.getMe().subscribe((user: UserDto) => {
      console.log(user)
    });
  }

}
