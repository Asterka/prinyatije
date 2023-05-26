import { Component } from '@angular/core';
import { IColumn } from './IColumn';

@Component({
  selector: 'vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss'],
})
export class VaccinationsComponent {
  tempCols: Array<IColumn> = [
    {
      // field: 'kind.description',
      field: 'className',
      header: 'Назначение',
      thclass: 'grid-header',
      tdclass: '',
    },
    {
      field: 'startDate',
      header: 'Название, номер серии',
      thclass: 'grid-header',
      tdclass: '',
    },
    {
      field: 'length',
      header: 'Дата вакцинации',
      thclass: 'grid-header',
      tdclass: '',
    },
    {
      field: 'diameter',
      header: 'Ревакцинация',
      thclass: 'grid-header',
      tdclass: '',
    },
    {
      field: 'thickness',
      header: 'Действительна до',
      thclass: 'grid-header',
      tdclass: '',
    },
    {
      field: 'depthFrom',
      header: 'Документ',
      thclass: 'grid-header',
      tdclass: '',
    },
  ];
}
