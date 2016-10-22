import { Component } from '@angular/core';

@Component({
  template:  `
  	<div class='row center-xs'>
  		<div class='col-xs-8'>
    		<h4>Decks navigation goes here</h4>
    	</div>
    </div>
    <router-outlet></router-outlet>
    
  `
})
export class DecksComponent { }