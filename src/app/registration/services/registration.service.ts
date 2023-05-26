import { Injectable } from '@angular/core';
import { UserCreateDto, UsersControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private userDefaultService: UsersControllerService,
  ) { }

  createUser(user: UserCreateDto) {
    return this.userDefaultService.create(user);
  }
}
