import { Component, OnDestroy } from '@angular/core';
import { DecksService } from '../decks.service';
import { Store } from '../../shared/store';

import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';


@Component({
    selector: 'deck-list',
    styles: [require('./deck-list.component.css')],
    template : require('./deck-list.component.htm')
})
export class DeckListComponent implements OnDestroy {
  decks = [];
  subscription: Subscription;

  constructor(private service: DecksService, private store: Store) {
      this.subscription = this.store.changes.pluck('decks')
        .subscribe((decks: any) => this.decks = decks);

      this.service.getDecks()
        .subscribe();
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
     console.log("DeckListComponent  destroyed");
  }

  onDeleteDeck(deck) {
    this.service.deleteDeck(deck)
      .subscribe();
  }

    onCreateDeck(deck) {
        this.service.createDeck(deck)
      .subscribe();
    }
}