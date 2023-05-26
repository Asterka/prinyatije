import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { PASSWORD_PATTERN } from 'src/app/shared/patterns/password-pattern';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
    });
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm)
      this.loginService.removeTokenFromLocalStorage();
      const userCredentials = this.loginForm.value;
      this.loginService.login(userCredentials);
    } else {
      throw new Error('form is not valid');
    }
  }

  redirectToRegistration() {
    this.router.navigate(['registration']);
  }
}
