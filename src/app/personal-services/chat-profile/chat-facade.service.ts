import { Injectable } from '@angular/core';
import { BehaviorSubject, first, takeUntil } from 'rxjs';
import { ChatControllerService } from 'src/app/openapi';
import { RxStompService } from 'src/app/shared/services/stomp.service';
import { Message } from '@stomp/stompjs';

//Todo move to reuse
function compareDates(date1: string, date2: string) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1 < d2) {
    return -1; // date1 is before date2
  } else if (d1 > d2) {
    return 1; // date1 is after date2
  } else {
    return 0; // date1 and date2 are equal
  }
}
@Injectable({
  providedIn: 'root',
})
export class ChatFacadeService {
  generalChatId: string = 'b1f6bde0-aa10-4df9-b4fe-8346918d4874';
  messages$: BehaviorSubject<any> = new BehaviorSubject([]);
  _msgs: Array<any> = [];
  constructor(
    public chat: ChatControllerService,
    public stomp: RxStompService
  ) {}

  getGeneralChatHistory() {
    return this.chat.findAllByChatId(this.generalChatId).subscribe({
      next: (messagesArray) => {
        let data = messagesArray.content;
        this._msgs = <Array<any>>data;
        this._msgs = this.orderByDate(this._msgs, 'createdAt');
        this.messages$.next(this._msgs);
      },
    });
  }

  listenToGeneralChat() {
    return this.stomp
      .watch(`/topic/chat/${this.generalChatId}`)
      .subscribe((message: Message) => {
        let parsedBody = JSON.parse(message.body);
        this._msgs.unshift(parsedBody);
        this._msgs = this.orderByDate(this._msgs, 'createdAt');
        this.messages$.next(this._msgs);
      });
  }

  sendMessage(text: string) {
    this.chat
      .createMessages(this.generalChatId, text)
      .pipe(first())
      .subscribe(() => {});
  }

  orderByDate(array: Array<any>, dateProperty: string, ascending = true) {
    // Clone the original array to avoid modifying the original
    const sortedArray = array.slice();

    sortedArray.sort((a, b) => {
      const date1 = a[dateProperty];
      const date2 = b[dateProperty];
      const comparison = compareDates(date1, date2);

      if (ascending) {
        return comparison; // Sort in ascending order
      } else {
        return -comparison; // Sort in descending order
      }
    });

    return sortedArray;
  }
}
