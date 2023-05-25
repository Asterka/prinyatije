import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule),
  },
  {
    path: 'main',
    component: MainNavPageComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
