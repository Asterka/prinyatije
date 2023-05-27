import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatFacadeService } from 'src/app/profile-page/chat-profile/chat-facade.service';

@Component({
  selector: 'chat-profile',
  templateUrl: './chat-profile.component.html',
  styleUrls: ['./chat-profile.component.scss']
})
export class ChatProfileComponent {
  generalFeedData: any = [];

  destroy$: Subject<any> = new Subject();

  constructor(public chatFacade: ChatFacadeService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
