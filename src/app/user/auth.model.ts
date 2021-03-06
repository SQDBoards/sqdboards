import { HttpStatusCode } from "@angular/common/http";
import { UserModel } from "./user-model";

export interface AuthResponseError {
  error: {
    data: null;
    error: {
      status: HttpStatusCode;
      name: string;
      message: string;
      details: {};
    };
  };
}

export interface AuthResponseSuccess {
  jwt: string;
  user: UserModel;
}
