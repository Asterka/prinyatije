import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-page/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'petProfile',
    loadChildren: () =>
      import('./pet-profile/profile-page/profile-page.module').then(
        (m) => m.PetProfilePageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./personal-services/profile-page/profile-page.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: '',
    component: MainNavPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
