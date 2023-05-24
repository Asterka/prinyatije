import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  initForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.required]],
    });
  }

}
