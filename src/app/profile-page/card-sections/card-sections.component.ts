import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddPetModalComponent } from '../modals/add-pet-modal/add-pet-modal.component';
import { CreatingServiceModalComponent } from '../modals/creating-service-modal/creating-service-modal.component';
import { PetCreateUpdateDto, PetDto } from 'src/app/openapi';
import { PetService } from 'src/app/shared/services/pet.service';
import * as dayjs from 'dayjs'
import { first } from 'rxjs';

interface Card {
  imageSrc?: string;
}

@Component({
  selector: 'card-sections',
  templateUrl: './card-sections.component.html',
  styleUrls: ['./card-sections.component.scss'],
})
export class CardSectionsComponent implements OnInit {
  _cardData: Card = {};
  ref?: DynamicDialogRef;
  pets: PetDto[] = [];

  @Input() set data(value: Card) {
    this._cardData = value;
  }

  constructor(
    public dialogService: DialogService,
    public petService: PetService,
  ) {}

  ngOnInit(): void {
    this.getPets();
  }

  show() {
    let modal = this.dialogService.open(AddPetModalComponent, {
      header: 'Добавление питомца',
      styleClass: 'modal-M',
    });

    modal.onClose.pipe(first()).subscribe((pet: PetCreateUpdateDto) => {
      this.petService.createPet(pet);
      this.getPets();
    })
  }

  openCreatingModal() {
    let modal = this.dialogService.open(CreatingServiceModalComponent, {
      header: 'Добавление услуги',
      styleClass: 'modal-M',
    })
  }

  getPets() {
    this.petService.getPets().subscribe((pets) => {
      this.pets = pets?.content as PetDto[];
    });
  }

  formatDate(date: string | undefined) {
    return dayjs(date).format('DD/MM/YYYY');
  }

}
