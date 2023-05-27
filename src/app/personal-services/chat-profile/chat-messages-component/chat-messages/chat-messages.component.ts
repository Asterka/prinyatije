import { ChatFacadeService } from './../../chat-facade.service';
import { Component, Input, OnInit } from '@angular/core';

//Move to reuse
function scrollToBottom(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
}

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit{
  _messages: Array<any> = [];

  textValue: string = '';

  @Input() set messages(value: Array<any>) {
    this._messages = value;
    setTimeout(()=>scrollToBottom('message-section'), 200)
  }
  get messages() {
    return this._messages;
  }

  constructor(public chatFacade: ChatFacadeService) {}

  ngOnInit(): void {
    this.chatFacade.listenToGeneralChat();
    this.chatFacade.getGeneralChatHistory();
  }

  submit() {
    this.chatFacade.sendMessage(this.textValue)
  }
}
