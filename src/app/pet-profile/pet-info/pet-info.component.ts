import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetDto } from 'src/app/openapi';
import { PetService } from 'src/app/shared/services/pet.service';

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
}
