/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserServiceRequestService } from './user-service-request.service';

describe('Service: UserServiceRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceRequestService]
    });
  });

  it('should ...', inject([UserServiceRequestService], (service: UserServiceRequestService) => {
    expect(service).toBeTruthy();
  }));
});
