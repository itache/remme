import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deck-card',
  styles: [require('./deck-card.component.css')],
	template: require('./deck-card.component.htm')
})
export class DeckCardComponent {
   @Input() deck = {};
   @Output() deleted = new EventEmitter();
   showDelete: boolean = false;

   toggle() {
     this.showDelete = !this.showDelete;
   }

   onDelete() {
     console.log("On delete");
     this.deleted.next(this.deck);
   }
}