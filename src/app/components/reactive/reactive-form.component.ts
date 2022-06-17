import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

import { FormErrors } from "../../models/form-errors";
import { FormControlValidationService } from "../../services/form-control-validation.service";

@Component({
  selector: 'reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReactiveFormComponent implements OnInit {
  public form: FormGroup;
  public formErrors$: FormErrors;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private formControlValidationService: FormControlValidationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get formErrors() {
    this.formErrors$ = this.formControlValidationService.formError$;
    return this.formErrors$;
  }

  public getControls() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  public buildForm() {
    // build our form
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      addresses: this.fb.array([
        this.fb.group({
          city: ['', [Validators.minLength(3)]],
          country: ['']
        })
      ])
    });

    // watch for changes & validate
    this.form.valueChanges.subscribe(() => this.validateForm());
  }

  public validateForm() {
    this.formControlValidationService.validate(this.form);
  }

  public addAddress() {
    let address = <FormArray>this.form.get('addresses');
    address.push(this.fb.group({
      city: ['', Validators.minLength(3)],
      country: ['']
    }));
  }

  public removeAddress(index: number) {
    let address = <FormArray>this.form.get('addresses');
    address.removeAt(index);
  }

  public get diagnosticReactiveForm() {
    return JSON.stringify(this.form.value);
  }

  public processForm() {
    console.log(this.form.value);
    this.isSubmitted = true;
  }

}
