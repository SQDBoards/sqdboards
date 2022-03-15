import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Directive({
  selector: '[isloading]',
})
export class LoadingDirective {
  constructor(
    private tmpRef: TemplateRef<any>,
    private ref: ViewContainerRef
  ) {}

  @Input() set isloading(val: any) {
    if (val) {
      this.ref.clear();
      this.ref.createComponent(LoadingComponent);
    } else {
      this.ref.clear();
      this.ref.createEmbeddedView(this.tmpRef);
    }
  }
}
