import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from 'primeng/dynamicdialog';
import { TrainModalComponent } from './train-modal/train-modal.component';

@Component({
  selector: 'clinical-examination',
  templateUrl: './clinical-examination.component.html',
  styleUrls: ['./clinical-examination.component.scss'],
})
export class ClinicalExaminationComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    public dialogService: DialogService,
  ) {}
  public svgIcon: any;

  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpClient
      .get(`assets/map.svg`, { responseType: 'text' })
      .subscribe((value) => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }

  showTraining() {
    let modal = this.dialogService.open(TrainModalComponent, {
      header: 'Добавление питомца',
      styleClass: 'modal-M',
    });
  }
}
