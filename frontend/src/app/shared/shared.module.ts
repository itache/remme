import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApiService } from './api.service';
import { Store } from './store';
import { StoreHelper } from './store-helper';

@NgModule({
   	providers: [ ApiService, Store, StoreHelper ],    
})
export class SharedModule{
}