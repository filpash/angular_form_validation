export interface FormErrors extends IObjectKeys {
  name: string;
  username: string;
}

export interface IObjectKeys {
  [key: string]: string | number;
}
