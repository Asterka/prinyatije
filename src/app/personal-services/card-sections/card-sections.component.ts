import {
  Component,
  Input,
} from '@angular/core';

interface Card {
  imageSrc?: string;
}

@Component({
  selector: 'card-sections',
  templateUrl: './card-sections.component.html',
  styleUrls: ['./card-sections.component.scss'],
})
export class CardSectionsComponent {
  _cardData: Card = {};

  @Input() set data(value: Card) {
    this._cardData = value;
  }

}
