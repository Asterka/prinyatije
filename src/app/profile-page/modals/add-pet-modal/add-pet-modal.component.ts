import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PetCreateUpdateDto } from 'src/app/openapi';
import { PetService } from 'src/app/shared/services/pet.service';

@Component({
  selector: 'add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.scss'],
})
export class AddPetModalComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  types: string[] = [];

  constructor(private fb: FormBuilder, private petService: PetService, public modalRef: DynamicDialogRef) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllTypes();
  }

  initForm() {
    this.addForm = this.fb.group({
      sex: ['', [Validators.required]],
      name: ['', [Validators.required]],
      breed: [''],
      birthday: [''],
      type: [''],
      files: [''],
    });
  }

  cancelAdding() {
    this.modalRef.close();
  }

  addPet() {
    this.modalRef.close(this.commpilePetParams());
  }

  commpilePetParams(): PetCreateUpdateDto {
    let newPet: PetCreateUpdateDto = {
      name: this.addForm.value.name,
      sex: this.addForm.value.sex,
      breed: this.addForm.value.breed,
      type: this.addForm.value.type,
      avatarUri: this.addForm.value.files.objectURL.changingThisBreaksApplicationSecurity,
      dateOfBirth: this.addForm.value.birthday,
    }
    return newPet;
  }

  onSelect(event: any) {

    this.addForm.get('files')?.setValue(event.currentFiles[0]);
  }

  getAllTypes() {
    this.petService.getPetTypes().subscribe(types => {
      this.types = types;
    })
  }
}
