import { Component, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddPetModalComponent } from '../modals/add-pet-modal/add-pet-modal.component';

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
  ref?: DynamicDialogRef;

  @Input() set data(value: Card) {
    this._cardData = value;
  }

  constructor(public dialogService: DialogService) {}

  show() {
    this.ref = this.dialogService.open(AddPetModalComponent, {
      header: 'Добавление питомца',
      styleClass: 'modal-M',
    });
  }
}
