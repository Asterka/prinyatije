import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationFormComponent } from './registration-page/registration-form/registration-form.component';
import { RouterModule } from '@angular/router';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RegistrationRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  declarations: [RegistrationPageComponent, RegistrationFormComponent]
})
export class RegistrationModule { }
