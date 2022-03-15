import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { FetchFailedComponent } from "./fetch-failed.component";

@Directive({
  selector: "[fetchFailed]"
})
export class FetchFailedDirective {
  constructor(
    private tmpRef: TemplateRef<any>,
    private ref: ViewContainerRef
  ) {}

  @Input() set fetchFailed(val: boolean) {
    if (val) {
      this.ref.clear();
      this.ref.createComponent(FetchFailedComponent);
    } else {
      this.ref.clear();
      this.ref.createEmbeddedView(this.tmpRef);
    }
  }
}
