import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creating-service-modal',
  templateUrl: './creating-service-modal.component.html',
  styleUrls: ['./creating-service-modal.component.scss']
})
export class CreatingServiceModalComponent implements OnInit {

  creatingForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.creatingForm = this.fb.group({
      serviceType: ['', [Validators.required,]],
      fixPrice: [''],
      minPrice: [''],
      maxPrice: [''],
    });
  }

  cancelAdding() {

  }

  addJob() {
    
  }
}
