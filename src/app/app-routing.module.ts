import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavPageComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-page/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services-page/services-page/services-page.module').then(
        (m) => m.ServicesPageModule
      ),
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
