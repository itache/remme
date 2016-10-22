import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent }  from './app/app.component';
import { appRoutingModule } from './app-routing.module';
import { CoreModule } from './app/core/core.module';
import { DecksModule } from './app/deck/decks.module';
import { SharedModule } from './app/shared/shared.module';

@NgModule({
   imports: [
      BrowserModule, 
      appRoutingModule,
      CoreModule,
      DecksModule,
      SharedModule
   	],
   declarations:[ AppComponent ], 
   schemas:     [ CUSTOM_ELEMENTS_SCHEMA ],
   bootstrap: [ AppComponent]       
})
export class AppModule{
}
