import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'train-modal',
  templateUrl: './train-modal.component.html',
  styleUrls: ['./train-modal.component.scss']
})
export class TrainModalComponent {
  options: AnimationOptions = {
    path: '/assets/train.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
