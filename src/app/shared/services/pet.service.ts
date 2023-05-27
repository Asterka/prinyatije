import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageDtoPetDto, PetCreateUpdateDto, PetDto, PetsControllerService } from 'src/app/openapi';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private petService: PetsControllerService
  ) { }

  createPet(pet: PetCreateUpdateDto) {
    this.petService.create3(pet).subscribe();
  }

  getPets(): Observable<PageDtoPetDto> {
    return this.petService.findByUserId1();
  }
}
