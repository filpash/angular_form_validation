export interface ValidationMessages extends IObjectKeys {
  name: NameErrorMessage;
  username: UsernameErrorMessage;
}

export interface NameErrorMessage {
  required: string;
  minlength: string;
  maxlength: string;
}

export interface UsernameErrorMessage {
  required: string;
  minlength: string;
}

export interface IObjectKeys {
  [key: string]: any;
}
