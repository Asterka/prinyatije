import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { PersonalServicesComponent } from '../personal-services.component';
import { ChatProfileComponent } from '../chat-profile/chat-profile.component';
import { ServicesRoutingModule } from './profile-routing.module';
import { ChatMessagesComponent } from '../chat-profile/chat-messages-component/chat-messages/chat-messages.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { GTMTemplate } from '../directives/template-directive';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    PersonalServicesComponent,
    ChatProfileComponent,
    ChatMessagesComponent,
    CardComponent,
    GTMTemplate
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    SkeletonModule,
    TooltipModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule
  ],
  exports: [
  ],
})
export class ServicesPageModule {}
