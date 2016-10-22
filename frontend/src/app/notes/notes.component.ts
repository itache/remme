import { Component, OnDestroy } from '@angular/core';
import { NotesService } from './notes.service';
import { Store } from '../shared/store';

import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';


@Component({
	selector: 'notes',
	styles: [require('./notes.component.css')],
	template : require('./notes.component.htm')
})
export class DecksComponent implements OnDestroy {
	notes = [];
  subscription: Subscription;

  constructor(private service: NotesService, private store: Store) {
      this.subscription = this.store.changes.pluck('notes')
        .subscribe((notes: any) => this.notes = notes);

      this.service.getNotes()
        .subscribe();
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
     console.log("NotesContainer destroyed");
  }

	onNoteChecked(note, i) {
		this.service.completeNote(note)
      .subscribe();
	}

	onCreateNote(note) {
		this.service.createNote(note)
      .subscribe();
	}
}