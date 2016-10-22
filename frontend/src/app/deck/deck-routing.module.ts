import { RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';

import { DecksComponent } from './decks.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { AuthService } from '../core/auth.service';
import { PatternsComponent } from './pattern/patterns.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'decks',
        component: DecksComponent,
        canActivate: [AuthService],
        children: [
          {
            path: '',
            children: [
              { path: ':id', component: PatternsComponent },
              { path: '', component: DeckListComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DecksRoutingModule {}