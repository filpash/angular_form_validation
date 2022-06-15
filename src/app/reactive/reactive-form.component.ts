import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReactiveFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      username: ['']
    })
  }

  public processForm() {
    console.log(this.form.value);
  }

}
