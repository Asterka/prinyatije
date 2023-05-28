import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { UserDto, UserExecutorServiceDto } from 'src/app/openapi';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  _servive: UserExecutorServiceDto = {};

  user: UserDto = {};
  @Input() isRequest: boolean = false;
  @Input() set inUser(user: UserDto) {
    this.user = user;
  }
  @Input() set service(service: UserExecutorServiceDto) {
    this._servive = service;
  };

  constructor(public userService: UserService, private loginService: LoginService, private router: Router) {

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

  logout() {
    this.loginService.removeTokenFromLocalStorage();
    this.router.navigate(['login']);
  }
}
