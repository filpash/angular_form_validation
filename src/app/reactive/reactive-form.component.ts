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
      name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      username: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.form.valueChanges.subscribe(data => {
      this.nameError = '';
      this.usernameError = '';

      let name = this.form.get('name');
      let username = this.form.get('username');

      if (name?.invalid && name.dirty) {
        if (name?.errors['required'])
          this.nameError = 'Name is required.'

        if (name?.errors['minlength'])
          this.nameError = 'Name must be at least  3 characters.'

        if (name?.errors['maxlength'])
          this.nameError = 'Name can\'t be more than 6 characters.'
      }

      if (username?.invalid && username.dirty) {
        if (username?.errors['required'])
          this.usernameError = 'Username is required.'

        if (username?.errors['minlength'])
          this.usernameError = 'Username must be at least  3 characters.'
      }
    })
  }

  public processForm() {
    console.log(this.form.value);
  }

}
