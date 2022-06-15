import { Component, OnInit } from "@angular/core";

export class User {
  name: string;
  userName: string;
}

@Component({
  selector: 'template-form',
  templateUrl: 'template-form.component.html',
  styleUrls: ['template-form.component.css']
})

export class TemplateFormComponent implements OnInit {
  public user: User;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      name: '',
      userName: ''
    }
  }

  public get diagnostic() {
    return JSON.stringify(this.user);
  }
}
