import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    MainNavPageComponent,
    ServicesPageComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
