import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'font-color-picker',
	styles: [require('./font-color-picker.component.css'), require('../shared/common.css')],
	template: require('./font-color-picker.component.htm')
})
export class FontColorPickerComponent {
	@Input() colors: Array<string> = [];
	@Output() colorSelected = new EventEmitter();
	isSelectorVisible:boolean = false;

	showSelector(value:boolean) {
		this.isSelectorVisible = value;
	}

	selectColor(color){
		this.showSelector(false);
		this.colorSelected.next({"color" : color});
	}
}