import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-card',
  styles: [require('./note-card.component.css')],
	template: require('./note-card.component.htm')
})
export class NoteCardComponent {
   @Input() note = {};
   @Output() checked = new EventEmitter();
   showCheck: boolean = false;

   toggle() {
     this.showCheck = !this.showCheck;
   }

   onChecked() {
     this.checked.next(this.note);
   }
}