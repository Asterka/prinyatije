import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthorised$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  get isAuthorised(): boolean {
    return this.isAuthorised$.getValue();
  }

  setAuthorisation(value: boolean) {
    this.isAuthorised$.next(value);
  }
}
