import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../auth.service';

export class UserValidators {

  static cannotContainSpace(control: FormControl) {
    if (control.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static getUserUniqueValidator(service: AuthService) {
    return (control: FormControl) => {
      return new Promise((resolve, reject) => {
        service.isUserExist(control.value).subscribe(
          exists => resolve({ notUniqueName: true }),
          err => resolve( null )
          );
      });
    };
  }

  static mailFormat(control: FormControl) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (!EMAIL_REGEXP.test(control.value)) {
      return { incorrectEmailFormat: true };
    }
    return null;
  }


  static matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    };
  }

}
