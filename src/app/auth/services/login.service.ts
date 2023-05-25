import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: any) {
    const userCredentials = {
      email: credentials.email.toLowerCase(),
      password: credentials.password,
    };

    return this.http.post('auth/login', credentials).pipe(
      tap((response) => {
        this.saveTokenToLocalStorage(response as string);
      })
    );
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

}
