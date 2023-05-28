import { Directive, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: '[petTemplate]',
  host: {},
})
export class GTMTemplate {
  @Input('petTemplate') gtmTemplate?: string;

  constructor(public template: TemplateRef<any>) {}

  getType(): string {
    return this.gtmTemplate || '';
  }
}
