import { HttpContext } from "@angular/common/http";
import { toCMS } from "./toCMS.context-token";

export function toCMSContext() {
  return new HttpContext().set(toCMS, true);
}
