import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule { }
