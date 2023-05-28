import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { UserDto, UserExecutorServiceDto } from 'src/app/openapi';
import { UserServiceRequestService } from 'src/app/shared/services/user-service-request.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  _servive: UserExecutorServiceDto = {};
  user: UserDto = {};
  @Input() set service(service: UserExecutorServiceDto) {
    console.log(service)
    this._servive = service;
  };

  constructor(
    public userService: UserService,
    public userServiceRequest: UserServiceRequestService,
    private messageService: MessageService,
    ) {

  }

  ngOnInit(

  ): void {
    this.getUserById();
  }

  get service() {
    return this._servive;
  }

  getUserById() {
    this.userService.getUserbyId(this.service.user?.id as string).subscribe(user => {
      this.user = user;
    });
  }

  sendRequest(id: string | undefined) {
    this.userServiceRequest.createRequest({ id }).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Успешно', detail: 'Ваша запрос успешно создан' });
    });
  }
}
