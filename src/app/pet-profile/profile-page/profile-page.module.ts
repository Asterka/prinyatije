import { GTMTemplate } from './../shared/directives/template-directive';
import { NgModule } from '@angular/core';
import player from 'lottie-web/build/player/lottie_svg';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChatProfileComponent } from '../chat-profile/chat-profile.component';
import { CardSectionsComponent } from '../card-sections/card-sections.component';
import { CardComponent } from '../card/card.component';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { PetInfoComponent } from '../pet-info/pet-info.component';
import { PetProceduresComponent } from '../pet-procedures/pet-procedures.component';
import { VaccinationsComponent } from '../pet-procedures/vaccinations/vaccinations.component';
import { ChipInformationComponent } from '../pet-procedures/chip-information/chip-information.component';
import { ClinicalExaminationComponent } from '../pet-procedures/clinical-examination/clinical-examination.component';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { ChatMessagesComponent } from '../chat-profile/chat-messages-component/chat-messages/chat-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StarsModule } from 'src/app/shared/component/stars/stars.module';
import { TrainModalComponent } from '../pet-procedures/clinical-examination/train-modal/train-modal.component';
import { TripPrepsComponent } from '../pet-procedures/trip-preps/trip-preps.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    CardComponent,
    GTMTemplate,
    ProfileHeaderComponent,
    PetInfoComponent,
    PetProceduresComponent,
    VaccinationsComponent,
    ChipInformationComponent,
    ClinicalExaminationComponent,
    ChatMessagesComponent,
    TrainModalComponent,
    TripPrepsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    SkeletonModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    StarsModule,
    CheckboxModule
  ],
  exports: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    GTMTemplate,

  ],
})
export class PetProfilePageModule {}

export function playerFactory() {
  return player;
}
