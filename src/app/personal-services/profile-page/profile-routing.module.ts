import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalServicesComponent } from '../personal-services.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalServicesComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
