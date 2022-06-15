import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReactiveFormComponent implements OnInit {
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      username: new FormControl('')
    })
  }

  public processForm() {
    console.log(this.form.value);
  }

}
