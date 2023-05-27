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
import { InputSwitchModule } from 'primeng/inputswitch';
import { CreatingServiceModalComponent } from '../modals/creating-service-modal/creating-service-modal.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { PetService } from 'src/app/shared/services/pet.service';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    CreatingServiceModalComponent,
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
    InputSwitchModule,
    InputNumberModule,
    TabViewModule,
    CalendarModule,
    CalendarModule,
    FileUploadModule,
    InputTextareaModule,
    DropdownModule
  ],
  exports: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    GTMTemplate,
  ],
  providers:[
    DialogService,
    PetService
  ]
})
export class ProfilePageModule {}
