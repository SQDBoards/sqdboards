import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { LoadingComponent } from "./loading.component";

@Directive({
  selector: "[isloading]"
})
export class LoadingDirective {
  constructor(
    private tmpRef: TemplateRef<any>,
    private ref: ViewContainerRef
  ) {}

  // styling inputs
  @Input("isloadingLoader-margin") margin: string = "0.5rem";
  @Input("isloadingLoader-width") w?: string;
  @Input("isloadingLoader-height") h?: string;
  @Input("isloadingLoader-ring-bgcolor") ring_bg: string = "white";
  @Input("isloadingLoader-ring-color") ring_color: string = "black";

  styles = {};

  @Input("isloading") set isloading(val: any) {
    this.styles = {
      "margin": this.margin,
      "width": this.w || "50px",
      "height": this.h || this.w || "50px",
      "border-color": this.ring_bg,
      "border-top-color": this.ring_color
    };

    if (val) {
      this.ref.clear();
      let loader = this.ref.createComponent(LoadingComponent);
      loader.instance.styles = this.styles;
    } else {
      this.ref.clear();
      this.ref.createEmbeddedView(this.tmpRef);
    }
  }
}
