import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

export class User {
  name: string;
  userName: string;
}

@Component({
  selector: 'template-form',
  templateUrl: 'template-form.component.html',
  styleUrls: ['template-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TemplateFormComponent implements OnInit {
  public user: User;
  public submitted: boolean = false;

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

  public processForm() {
    console.log(this.user);
    this.submitted = true;
  }
}
