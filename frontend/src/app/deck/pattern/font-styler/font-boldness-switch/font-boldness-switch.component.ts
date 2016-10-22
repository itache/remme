import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector:'font-boldness-switch',
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
			[class.active]="isBold"
			(click)="changeBoldness(!isBold)" 
			class="material-icons icon">
				format_bold
		</i>
	`
})
export class FontBoldnessSwitchComponent implements OnInit {
	@Input() initial = '';
	@Output() boldChanged = new EventEmitter();

	isBold: boolean;
	
	ngOnInit() {
		this.isBold = (this.initial === 'bold') ? true : false;
	}

	changeBoldness(isBold){
		this.isBold = isBold;
		let boldness = (isBold === true) ? 'bold' : 'normal';
		this.boldChanged.next({"font-weight" : boldness});
	}
}