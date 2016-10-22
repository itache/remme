import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pattern-field',
  styles: [require('./pattern-field.component.css')],
	template: require('./pattern-field.component.htm')
})
export class PatternFieldComponent {
   @Input() field = {};
   @Output() deleted = new EventEmitter();
   showDelete: boolean = false;

   toggle() {
     this.showDelete = !this.showDelete;
   }

   onDelete() {
     console.log("On delete");
     this.deleted.next(this.field);
   }
}