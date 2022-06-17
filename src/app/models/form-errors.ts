export interface FormErrors extends IObjectKeys {
  name: string;
  username: string;
  addresses: AddressesForm[] | any;
}

export interface AddressesForm {
  city: string;
  country: string;
}

export interface IObjectKeys {
  [key: string]: any;
}
