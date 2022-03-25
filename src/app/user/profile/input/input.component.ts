import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <label
      class="relative block px-3 py-1.5 border-2 border-gray-200"
      for="{{ label }}"
    >
      <span class="text-sm font-semibold text-slate-800" [attr.for]="label">
        {{ label }}
      </span>

      <input
        class="w-full p-0 text-sm border-none focus:ring-0"
        id="{{ label }}"
        type="text"
        placeholder="{{ placeholder }}"
        formControlName="{{ fcn }}"
      />
    </label>
  `,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input("input-label") label?: string;
  @Input("input-placeholder") placeholder: string = "Text";

  @Input("input-formcontrolname") fcn?: string;

  ngOnInit(): void {}
}
