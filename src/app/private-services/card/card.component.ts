import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { UserExecutorServiceDto } from 'src/app/openapi';
import { GTMTemplate } from 'src/app/profile-page/shared/directives/template-directive';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() petPhoto: string | undefined = '';
  @ContentChildren(GTMTemplate) templates?: QueryList<any>;

  /* Шаблоны внутри */
  bodyTemplate?: TemplateRef<any>;

  /* При инициализации переданных компонент
   *  пробегаемся по их контенту.
   */
  ngAfterContentInit() {
    this._initZones(this.templates);
  }

  private _initZones(passedTemplates: any) {
    passedTemplates.forEach((item: any) => {
      console.log(item);

      /* Переданные шаблонные зоны отражаем в шаблонные зоны нашего компонента */
      switch (item.getType()) {
        case 'body-template':
          this.bodyTemplate = <any>item.template;
          break;
      }
    });
  }
}
