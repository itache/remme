import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api.service';
import { StoreHelper } from '../shared/store-helper'


@Injectable()
export class NotesService{
	path: string = '/notes';

	constructor(
		private apiService: ApiService,
		private storeHelper: StoreHelper
	){}

	createNote(note) {
		return this.apiService.post(this.path, note)
			.do(savedNote => this.storeHelper.add('notes', savedNote));
	}

	getNotes() {
		return this.apiService.get(this.path)
			.do(res => this.storeHelper.update('notes', res));
	}

	completeNote(note) {
		return this.apiService.delete(`${this.path}/${note.id}`)
			.do(res => this.storeHelper.findAndDelete('notes', res.id));
	}
}