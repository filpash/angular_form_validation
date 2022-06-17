import { Injectable } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import { FormErrors } from '../models/form-errors';
import { ValidationMessages } from '../models/validation-messages';

@Injectable({
  providedIn: 'root'
})
export class FormControlValidationService {

  formError$: FormErrors = {
    name: '',
    username: '',
    addresses: [
      { city: '', country: '' }
    ]
  };

  validationMessages$: ValidationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least  3 characters.',
      maxlength: 'Name can\'t be more than 6 characters.'
    },
    username: {
      required: 'Username is required.',
      minlength: 'Username must be at least  3 characters.',
    },
    addresses: {
      city: {
        required: 'City is required.',
        minlength: 'City must be 3 characters.'
      },
      country: {
        required: 'Country is required.'
      }
    }
  }

  public validate(form: FormGroup) {
    for (let field in this.formError$) {
      // clear that input field errors
      this.formError$[field] = '';

      // grab an input field by name
      let input = form.get(field);

      if (input?.invalid && input.dirty) {
        // figure out the type of error
        // loop over the formErrors field names
        for (let error in input.errors) {
          // assign the type of error message to a variable
          this.formError$[field] = this.validationMessages$[field][error];
        }
      }
    }

    this.validateAddresses(form);
  }

  public validateAddresses(form: FormGroup) {
    // grab the addresses formArray
    let addresses = <FormArray>form.get('addresses');

    // clear the form errors
    this.formError$.addresses = [];
    // loop through however many form groups are in the form array
    let n = 1;
    while (n <= addresses.length) {
      // add the clear errors back
      this.formError$.addresses.push({ city: '', country: '' });

      // grab the specific group
      let address = <FormGroup>addresses.at(n - 1);

      // validate the specific grab. loop through the groups controls
      for (let field in address.controls) {
        // get the form control
        let input = address.get(field);

        // do the validation and save errors to form errors if necessary
        if (input?.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formError$.addresses[n - 1][field] = this.validationMessages$.addresses[field][error];
          }
        }
      }

      n++;
    }
  }
}
