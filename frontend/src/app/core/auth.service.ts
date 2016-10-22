import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/Rx';

import { ApiService } from '../shared/api.service';
import { StoreHelper } from '../shared/store-helper';
import { Store } from '../shared/store';



@Injectable()
export class AuthService implements CanActivate {
	JWT_KEY: string = "token";

	constructor(
		private router: Router, 
		private apiService: ApiService,
		private storeHelper: StoreHelper,
		private store: Store
		) {
				const token = window.localStorage.getItem(this.JWT_KEY);
    	if (token) {
      		this.setJwt(token);      			
    	}
	}

	getCurrent() {
		return this.apiService.get('/users/me')
			.do(res => this.storeHelper.update('user', res));
	}

	setJwt(jwt: string) {
		window.localStorage.setItem(this.JWT_KEY, jwt);
    	this.apiService.setHeaders({Authorization: `${jwt}`});
  	}

	authenticate(creds) {
		return this.apiService.post(`/login`, creds)
			.do(res => this.setJwt(res.token))
			.do(res => this.storeHelper.update('user', res.user));
	}

	register(creds) {
		return this.apiService.put('/users', creds)
			.do(res => this.setJwt(res.token))
			.do(res => this.storeHelper.update('user', res.user));
	}

	singout() {
		this.apiService.get('/logout');
		window.localStorage.removeItem(this.JWT_KEY);
		this.apiService.deleteHeader("authorization");
		this.store.purge();
		this.router.navigate(['', 'auth']);
	}

	isUserExist(name: string) {
		return this.apiService.get('/users/'+ name);
	}

	isAuthorized(): boolean {
		return Boolean(window.localStorage.getItem(this.JWT_KEY));
	}

	canActivate(): boolean {
		const isAuth = this.isAuthorized();
		
		if(!isAuth) {
			this.router.navigate(['', 'auth']);
		}
		return isAuth;
	}
}