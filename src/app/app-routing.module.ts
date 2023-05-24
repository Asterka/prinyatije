import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavPageComponent } from './main-nav-page/main-nav-page.component';

const routes: Routes = [
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
