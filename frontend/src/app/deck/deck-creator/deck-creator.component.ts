import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Deck } from '../shared/deck.model';

@Component({
	selector: 'deck-creator',
	styles: [require('./deck-creator.component.css')],
	template: require('./deck-creator.component.htm')
})
export class DeckCreatorComponent {
	@Output() createDeck = new EventEmitter();
  	
	name: string;

	onCreateDeck() {
		const name = this.name;

		if(name) {
			let newDeck: Deck = {
				name: name,
				created: new Date(),
				changed: new Date(),
				quantity: 0
			}
			this.createDeck.next(newDeck);
			this.reset();
		}
	}

	reset() {
		this.name = '';
	}
}