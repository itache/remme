import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DecksService } from './decks.service';
import { DecksComponent } from './decks.component';
import { DecksRoutingModule } from './deck-routing.module';
import { DeckCardComponent } from './deck-card/deck-card.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckCreatorComponent } from './deck-creator/deck-creator.component';
import { PatternsModule } from './pattern/patterns.module';

@NgModule({
	imports: [ CommonModule, FormsModule, MaterialModule.forRoot(), DecksRoutingModule, PatternsModule ],
   	declarations:[ 
   		DeckListComponent, 
   		DeckCardComponent, 
   		DeckCreatorComponent, 
   		DecksComponent, 
          ],
   	providers: [ DecksService ],
   	schemas:   [ CUSTOM_ELEMENTS_SCHEMA ]      
})
export class DecksModule{
}