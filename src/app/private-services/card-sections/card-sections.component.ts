import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PageDtoUserExecutorServiceDto, PetCreateUpdateDto, PetDto, UserExecutorServiceDto, UserServiceCreateUpdateDto } from 'src/app/openapi';
import { PetService } from 'src/app/shared/services/pet.service';
import * as dayjs from 'dayjs'
import { Subject, first } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/shared/services/user-services.service';
import { AddPetModalComponent } from 'src/app/profile-page/modals/add-pet-modal/add-pet-modal.component';
import { CreatingServiceModalComponent } from 'src/app/profile-page/modals/creating-service-modal/creating-service-modal.component';
import { UserService } from 'src/app/shared/services/user.service';

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
  userServices: UserExecutorServiceDto[] = [];
  items: MenuItem[] = [
    { label: 'Редактировать', icon: 'pi pi-pencil' },
    { label: 'Поделиться паспортом', icon: 'pi pi-link' },
  ];

  @Input() set data(value: Card) {
    this._cardData = value;
  }

  constructor(
    public dialogService: DialogService,
    public petService: PetService,
    public router: Router,
    public serviceService: UserServicesService,
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getPets();
    // this.getUserServices();
  }

  show() {
    let modal = this.dialogService.open(AddPetModalComponent, {
      header: 'Добавление питомца',
      styleClass: 'modal-M',
    });

    modal.onClose.pipe(first()).subscribe((pet: PetCreateUpdateDto) => {
      this.petService.createPet(pet).subscribe((newPet) => {
        this.getPets();
      });
    })
  }

  openCreatingModal() {
    let modal = this.dialogService.open(CreatingServiceModalComponent, {
      header: 'Добавление услуги',
      styleClass: 'modal-M',
    })
    modal.onClose.subscribe(service => {
      this.serviceService.createUserService(service).subscribe(() => {
        // this.getUserServices();
      });
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

  removePet(petId: string | undefined) {
    this.petService.removePet(petId).subscribe(() => {
        this.getPets();
    });
  }

  openPetCard(event: Event, petId: string | undefined) {
    this.router.navigate(['petProfile'], {
      queryParams: {
        petId,
      }
    });
  }

  // getUserServices() {
  //   this.serviceService.getUserServices().subscribe(userServices => {
  //     this.userServices = userServices.content as UserExecutorServiceDto[];
  //   });
  // }

  // removeUserService(userServiceId: string | undefined) {
  //   this.serviceService.removeUserService(userServiceId as string).subscribe(() => {
  //     this.getUserServices();
  //   })
  // }

  searchService(searchValue: string) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.serviceService.getServicesByName(value['petType'], searchValue).subscribe(searchedService => {
        this.userServices = searchedService.content as UserExecutorServiceDto[];
      })
    })
  }
}
