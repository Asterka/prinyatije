import { Injectable } from '@angular/core';
import { UserServiceRequestCreateDto, UserServiceRequestsControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class UserServiceRequestService {

  constructor(
    private serviceRequestService: UserServiceRequestsControllerService,
  ) { }

  createRequest(requestId: UserServiceRequestCreateDto) {
    return this.serviceRequestService.create2(requestId);
  }
}
