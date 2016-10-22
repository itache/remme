import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector:'font-style-switch',
	styles: [require('../shared/common.css'),`
		.icon {
			font-size: 1.5rem;
		}
		.active {
			color: #ef6c00;
		}
	`],
	template: `
		<i 
			[class.active]="isItalic"
			(click)="changeStyle(!isItalic)" 
			class="material-icons icon">
				format_italic
		</i>
	`
})
export class FontStyleSwitchComponent implements OnInit {
	@Input() initial = '';
	@Output() styleChanged = new EventEmitter();

	isItalic: boolean;
	
	ngOnInit() {
		this.isItalic = (this.initial === 'initial') ? true : false;
	}

	changeStyle(isItalic){
		this.isItalic = isItalic;
		let style = (isItalic === true) ? 'italic' : 'normal';
		this.styleChanged.next({"font-style" : style});
	}
}