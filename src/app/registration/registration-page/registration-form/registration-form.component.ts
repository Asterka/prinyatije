import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { UserCreateDto } from 'src/app/openapi';
import { RegistrationForm } from './registration-form.enum';
import { PASSWORD_PATTERN } from 'src/app/shared/patterns/password-pattern';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({});
  controls = RegistrationForm;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
      name: ['', [Validators.required, Validators.required]],
      surname: ['', [Validators.required, Validators.required]],
      address: [''],
      postCode: [''],
      country: [''],
      city: [''],
    });
  }

  submit() {
    if (this.registrationForm?.valid) {
      const userData: UserCreateDto = this.registrationForm.value;
      this.registrationService.createUser(userData).subscribe();
    } else {
      throw new Error('form is not valid');
    }
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

}
