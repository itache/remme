import { Injectable } from '@angular/core';

import { ApiService } from '../../shared/api.service';
import { StoreHelper } from '../../shared/store-helper';

@Injectable()
export class PatternFieldsService{
	path(id: number): string {
		return `/decks/${id}/patterns`;
	}

	constructor(
		private apiService: ApiService,
		private storeHelper: StoreHelper
	){}

	create(field) {
		return this.apiService.post(this.path(field.deckId), field)
			.do(savedField => this.storeHelper.add('patternFields', savedField));
	}

	getAll(id: number) {
		return this.apiService.get(this.path(id))
			.do(res => this.storeHelper.update('patternFields', res));
	}

	delete(field) {
		return this.apiService.delete(`${this.path(field.deckId)}/${field.id}`)
			.do(res => this.storeHelper.findAndDelete('patternFields', res.id));
	}
}