import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PatternFieldsService } from './pattern-fields.service';
import { Store } from '../../shared/store';

@Component({
	selector: 'patterns',
	template : require('./patterns.component.htm')
})
export class PatternsComponent implements OnDestroy, OnInit {
    deckID: number;
	  fields = [];
  	subscription: Subscription;

  	constructor(
  		private service: PatternFieldsService, 
  		private store: Store,
  		private route: ActivatedRoute
  	) {
      this.subscription = this.store.changes.pluck('patternFields')
        .subscribe((fields: any) => this.fields = fields);
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
     console.log("DecksContainer destroyed");
  }

  ngOnInit() {
  	this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.deckID = +id;
        this.service
          .getAll(id)
          .subscribe();
      });
  }

  onDelete(field) {
    this.service.delete(field)
      .subscribe();
  }

	onCreate(field) {
    field.deckId = this.deckID;
		this.service.create(field)
      .subscribe();
	}
}