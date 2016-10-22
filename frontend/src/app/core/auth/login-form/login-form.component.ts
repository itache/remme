import { Component } from '@angular/core';
import { Router } from '@angular/router';

import  { User } from '../../shared/user.model';
import  { AuthService } from '../../auth.service';

@Component({
  selector: 'login-form',
  styles: [require('./login-form.css')],
  template: require('./login-form.htm')
}) 
export class LoginFormComponent {
	user = {
		username: '',
		password: ''
	};
	
	error: string;

	constructor(private router: Router, private authService: AuthService) {}

	auth() {
		this.authService.authenticate(this.user)
			.subscribe(
				() => this.router.navigate(['']),
				error => this.error = "Internal server error" )
	}
}