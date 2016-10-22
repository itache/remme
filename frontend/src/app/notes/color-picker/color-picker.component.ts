import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'color-picker',
	styles: [require('./color-picker.component.css')],
	template: require('./color-picker.component.htm')
})
export class ColorPickerComponent {
	@Input() colors: Array<string> = [];
	@Output() selected = new EventEmitter();
	isSelectorVisible:boolean = false;

	showSelector(value:boolean) {
		this.isSelectorVisible = value;
	}

	selectColor(color){
		this.showSelector(false);
		this.selected.next(color);
	}
}