import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'font-styler',
	styles: [require('./font-styler.css')],
	template: require('./font-styler.htm')
})
export class FontStylerComponent {
	@Input() style = {}
	@Output() styleChanged = new EventEmitter();

	colors: Array<string> =  ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'black'];
  	fonts: Array<string> = ["Arial", "Times New Roman", "Roboto", "Verdana"];
  	
	onStyleChanged(styleProp){
		this.style = Object.assign({}, this.style, styleProp);
		console.log(this.style);
		this.styleChanged.next(this.style);
	}
}