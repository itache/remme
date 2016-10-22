import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'note-creator',
	styles: [require('./note-creator.component.css')],
	template: require('./note-creator.component.htm')
})
export class NoteCreatorComponent {
	@Output() createNote = new EventEmitter();
  	colors:Array<string> =  ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];
	newNote = {
		title: '',
		value: '',
    	color: 'white'
	}

	fullForm: boolean = false;

  onColorSelect(color: string) {
    this.newNote.color = color;
  }

	onCreateNode() {
		const {title, value, color} = this.newNote;

		if(title && value) {
			this.createNote.next({title, value, color});
			this.reset();
      		this.fullForm = false;
		}
	}

	reset() {
		this.newNote = {
			title: '',
			value: '',
      		color: 'white'
		}
	}

	toggle(value: boolean) {
		this.fullForm = value;
	}
}