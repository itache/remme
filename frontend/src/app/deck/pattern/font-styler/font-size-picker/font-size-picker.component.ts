import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector:'font-size-picker',
	styles: [require('./font-size-picker.css'), require('../shared/common.css')],
	template: require('./font-size-picker.htm')
})
export class FontSizePickerComponent {
	@Input() min = 0;
	@Input() max = 0;
	@Input() initial = '';
	@Input() unit = '%';

	@Output() sizeChanged = new EventEmitter();

	size = 100;

	ngOnInit() {
		this.size = parseInt(this.initial, 10);
	}

	changeSize(newSize){
		this.size = (newSize > this.max) 
			? this.max 
			: ( (newSize < this.min) ? this.min : newSize);
		this.sizeChanged.next({"font-size" : this.size + this.unit});
	}
}