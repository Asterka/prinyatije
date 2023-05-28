import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateServicesComponent } from './private-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardSectionsComponent } from './card-sections/card-sections.component';
import { CardComponent } from './card/card.component';
import { MenuModule } from 'primeng/menu';
import { ChatProfileComponent } from './chat-profile/chat-profile.component';
import { ChatMessagesComponent } from './chat-profile/chat-messages-component/chat-messages/chat-messages.component';
import { TabViewModule } from 'primeng/tabview';
import { PrivateServicesRoutingModule } from './private-services-routing.module';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { GTMTemplate } from './shared/directives/template-directive';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    TabViewModule,
    RouterModule,
    PrivateServicesRoutingModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [
    PrivateServicesComponent,
    CardSectionsComponent,
    CardComponent,
    ChatProfileComponent,
    ChatMessagesComponent,
    GTMTemplate,
    ProfileHeaderComponent
  ],
  providers: [MessageService]
})
export class PrivateServicesModule { }
