import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';
import { UserValidators } from './validators/user.validators';
import { User } from '../../shared/user.model';

@Component({
  selector: 'registartion-form',
  styles: [require('./registration-form.css')],
  template: require('./registration-form.htm')
}) 
	
export class RegistrationFormComponent {
	registerForm: FormGroup;
	
	error: string;
	
	constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    	this.registerForm = fb.group({
      		login: ['', 
      			Validators.compose([
        			Validators.required,
        			Validators.minLength(3),
        			UserValidators.cannotContainSpace
      			]), UserValidators.getUserUniqueValidator(authService)],
      		email: ['', Validators.compose([Validators.required, UserValidators.mailFormat])],
      		password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      		passConfirm: ['', Validators.required]
    	}, 
    		{ validator: UserValidators.matchingPasswords('password', 'passConfirm') });
  	}

  	singup(values) {
  		const user = {
  			username: values.login,
  			email: values.email,
  			password: values.password
  		}
  		this.authService.register(user).
  			subscribe(
  				() => this.router.navigate(['']),
				  error => this.error = "Internal server error");
  	}
}