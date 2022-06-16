import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormErrors } from '../models/form-errors';
import { ValidationMessages } from '../models/validation-messages';

@Injectable({
  providedIn: 'root'
})
export class FormControlValidationService {

  formError$: FormErrors = {
    name: '',
    username: ''
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
    }
  }

  validate(form: FormGroup) {
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
  }
}
