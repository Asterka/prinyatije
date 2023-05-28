import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateServicesComponent } from './private-services.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateServicesRoutingModule {}
