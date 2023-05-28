import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'trip-preps',
  templateUrl: './trip-preps.component.html',
  styleUrls: ['./trip-preps.component.scss'],
})
export class TripPrepsComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      country: ['', []],
      rules: ['', []],
      rabbies: ['', []],
      goscertif: ['', []],
      flight: ['', []],
      ticket: ['', []],
      internationalPass: ['', []],
    });
  }
}
