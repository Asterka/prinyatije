import { Injectable } from '@angular/core';
import { UserServiceCreateUpdateDto, UserServicesControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(
    private userServicesService: UserServicesControllerService
  ) { }

  createUserService(userService: UserServiceCreateUpdateDto) {
    return this.userServicesService.create1(userService);
  }

  getUserServices() {
    return this.userServicesService.findByUserId();
  }

  removeUserService(userServiceId: string) {
    return this.userServicesService._delete(userServiceId);
  }
}
