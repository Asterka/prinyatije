import { GTMTemplate } from './../shared/directives/template-directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChatProfileComponent } from '../chat-profile/chat-profile.component';
import {
  CardSectionsComponent,
} from '../card-sections/card-sections.component';
import { CardComponent } from '../card/card.component';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    CardComponent,
    GTMTemplate,
    ProfileHeaderComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ButtonModule],
  exports: [
    ProfilePageComponent,
    ChatProfileComponent,
    CardSectionsComponent,
    GTMTemplate,
  ],
})
export class ProfilePageModule {}
