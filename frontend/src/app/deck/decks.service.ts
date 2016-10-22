import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { StoreHelper } from '../shared/store-helper'


@Injectable()
export class DecksService{
	path: string = '/decks';

	constructor(
		private apiService: ApiService,
		private storeHelper: StoreHelper
	){}

	createDeck(note) {
		return this.apiService.post(this.path, note)
			.do(savedNote => this.storeHelper.add('decks', savedNote));
	}

	getDecks() {
		return this.apiService.get(this.path)
			.do(res => this.storeHelper.update('decks', res));
	}

	deleteDeck(deck) {
		return this.apiService.delete(`${this.path}/${deck.id}`)
			.do(res => this.storeHelper.findAndDelete('decks', res.id));
	}
}