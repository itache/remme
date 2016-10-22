import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Pattern } from '../shared/pattern.model';

@Component({
	selector: 'field-creator',
	styles: [require('./field-creator.component.css')],
	template: require('./field-creator.component.htm')
})
export class FieldCreatorComponent {
	@Output() createField = new EventEmitter();

  	defaultStyle = {
  		"font-family": 'Roboto',
  		"font-size": '100%',
  		"font-weight": 'normal',
  		"font-style": "normal",
		"color": 'black'
	}

	newField = {
		name: '',
		style: this.defaultStyle
	};

	fullForm: boolean = false;

	onStyleChanged(style) {
		this.newField.style = style;
	}

	onCreateField() {
		const {name, style} = this.newField;

		if(name) {
			let newField: Pattern = {
				name: name,
				style: style 
			}
			this.createField.next(newField);
			this.reset();
		}
	}

	reset() {
		this.fullForm = false;
		this.newField = {
			name: '',
			style: this.defaultStyle
		};
	}

	toggle(value: boolean) {
		this.fullForm = value;
	}
}