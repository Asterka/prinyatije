import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    MainNavPageComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    HttpClientModule,
    RegistrationModule,
    BrowserAnimationsModule,
    DynamicDialogModule
  ],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
