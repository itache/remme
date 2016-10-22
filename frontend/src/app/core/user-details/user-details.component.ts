import { Component } from '@angular/core';

import  { AuthService } from '../auth.service';
import  { Store } from '../../shared/store';
import  { StoreHelper } from '../../shared/store-helper';

@Component({
	selector: 'user-details',
  	styles: [require('./user-details.css')],
	template: require('./user-details.htm')
})
export class UserDetailsComponent {
	user = {
		username:''
	}

	constructor(private authService: AuthService, private store: Store, private storeHelper: StoreHelper){
		this.store.changes.pluck('user')
        	.subscribe((user: any) => this.user = user);
       	if(this.authService.isAuthorized()) {
       		this.authService.getCurrent()
       			.subscribe();
       	}
	}

	logout() {
		this.authService.singout();
	}
}