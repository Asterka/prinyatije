import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/services/login.service';
import { UserDto } from '../openapi';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {
  user: UserDto = {};

  constructor(private loginService: LoginService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMe();
  }

  getMe() {
    this.loginService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
