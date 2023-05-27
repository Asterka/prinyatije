import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PetService } from 'src/app/shared/services/pet.service';

@Component({
  selector: 'app-creating-service-modal',
  templateUrl: './creating-service-modal.component.html',
  styleUrls: ['./creating-service-modal.component.scss']
})
export class CreatingServiceModalComponent implements OnInit {

  creatingForm: FormGroup = new FormGroup({});
  petTypes: string[] = [];

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private modalRef: DynamicDialogRef,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getPetTypes();
  }

  initForm() {
    this.creatingForm = this.fb.group({
      serviceType: ['', [Validators.required,]],
      petType: ['', [Validators.required,]],
      fixPrice: [false],
      minPrice: [''],
      maxPrice: [''],
      departure: [false],
      message: [''],
    });
  }

  cancelAdding() {
    this.modalRef.close();
  }

  addService() {
    this.modalRef.close(this.compileServiceParams());
  }

  compileServiceParams() {
    return {
      petType: this.creatingForm.value.petType,
      serviceType: this.creatingForm.value.serviceType,
      message: this.creatingForm.value.message,
      departure: this.creatingForm.value.departure,
      // fixPrice: this.creatingForm.value.fixPrice,
      // minPrice: this.creatingForm.value.minPrice,
      // maxPrice: this.creatingForm.value.maxPrice,
    }
  }

  getPetTypes() {
    this.petService.getPetTypes().subscribe(types => {
      this.petTypes = types;
    })
  }
}
