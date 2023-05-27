import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import dayjs from 'dayjs';
import { PetDto } from 'src/app/openapi';
import { PetService } from 'src/app/shared/services/pet.service';
import relativeTime from 'dayjs/plugin/relativeTime';


@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit {
  pet: PetDto = {};

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public petService: PetService,
  ) {

  }

  ngOnInit(): void {
    this.getPetById();
  }

  getPetById() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.petService.getPetById(param['petId']).subscribe(pet => {
        this.pet = pet;
      });
    })
  }

  returnToProfile(){
    this.router.navigate(['profile']);
  }

  getPerBirthday(date: string | undefined) {
    return dayjs(dayjs(date)).format('DD/MM/YYYY');
  }

  getPetAge(date: string | undefined) {
    dayjs.extend(relativeTime);

    return dayjs(dayjs(date)).fromNow(true);
  }
}
