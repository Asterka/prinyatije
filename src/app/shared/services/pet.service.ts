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
    return this.petService.create3(pet);
  }

  getPets(): Observable<PageDtoPetDto> {
    return this.petService.findByUserId1();
  }

  removePet(petId: string | undefined) {
    return this.petService.delete1(petId as string);
  }

  getPetTypes() {
    return this.petService.findAllPetTypes();
  }

  getPetById(petId: string) {
    return this.petService.findById(petId);
  }
}
