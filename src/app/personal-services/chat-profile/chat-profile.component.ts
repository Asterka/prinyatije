import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChatFacadeService } from './chat-facade.service';

@Component({
  selector: 'chat-profile',
  templateUrl: './chat-profile.component.html',
  styleUrls: ['./chat-profile.component.scss'],
})
export class ChatProfileComponent implements OnInit {
  generalFeedData: any = [];

  destroy$: Subject<any> = new Subject();

  constructor(public chatFacade: ChatFacadeService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
