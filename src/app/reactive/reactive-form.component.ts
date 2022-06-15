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
  public nameError: string;
  public usernameError: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      username: ['']
    });

    this.form.valueChanges.subscribe(data => {
      let name = this.form.get('name');
      let username = this.form.get('username');

      if (name?.invalid && name.dirty) {
        this.nameError = 'Name is required.';
      }

      if (username?.invalid && username.dirty) {
        this.usernameError = 'Username is required';
      }
    })
  }

  public processForm() {
    console.log(this.form.value);
  }

}
