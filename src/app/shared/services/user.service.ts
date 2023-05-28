import { Injectable } from '@angular/core';
import { UsersControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private userService: UsersControllerService,
  ) { }

  getUserbyId(id: string) {
    return this.userService.getById(id);
  }
}
