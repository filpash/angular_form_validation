export interface ValidationMessages extends IObjectKeys {
  name: NameErrorMessage;
  username: UsernameErrorMessage;
  addresses: AddressesValidationMessage | any;
}

export interface AddressesValidationMessage {
  city: CityErrorMessage;
  country: CountryErrorMessage;
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

export interface CityErrorMessage {
  required: string;
  minlength: string;
}

export interface CountryErrorMessage {
  required: string;
}

export interface IObjectKeys {
  [key: string]: any;
}
