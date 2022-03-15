import { HttpContextToken } from "@angular/common/http";

export const toCMS: HttpContextToken<boolean> = new HttpContextToken<boolean>(
  () => {
    return false;
  }
);
