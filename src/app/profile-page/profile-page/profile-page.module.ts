import { GTMTemplate } from './../shared/directives/template-directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChatProfileComponent } from '../chat-profile/chat-profile.component';
import { CardSectionsComponent } from '../card-sections/card-sections.component';
import { CardComponent } from '../card/card.component';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AddPetModalComponent } from '../modals/add-pet-modal/add-pet-modal.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    CardComponent,
    GTMTemplate,
    ProfileHeaderComponent,
    AddPetModalComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    DynamicDialogModule,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    InputTextModule,
    CalendarModule
  ],
  exports: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    GTMTemplate,
  ],
  providers:[
    DialogService
  ]
})
export class ProfilePageModule {}
