import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'font-family-picker',
	styles: [require('./font-family-picker.css'), require('../shared/common.css'),],
	template: require('./font-family-picker.htm')
})
export class FontFamilyPickerComponent {
	@Input() fonts: Array<string> = [];
	@Input() selected: string = '';
	@Output() familySelected = new EventEmitter();
	isSelectorVisible:boolean = false;

	showSelector(value:boolean) {
		this.isSelectorVisible = value;
	}

	selectFamily(family){
		this.selected = family;
		this.showSelector(false);
		this.familySelected.next({"font-family" : family});
	}
}