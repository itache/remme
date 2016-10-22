import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PatternFieldsService } from './pattern-fields.service';
import { PatternFieldComponent } from './pattern-field/pattern-field.component';
import { FontColorPickerComponent } from './font-styler/font-color-picker/font-color-picker.component';
import { FontFamilyPickerComponent } from './font-styler/font-family-picker/font-family-picker.component';
import { FontSizePickerComponent } from './font-styler/font-size-picker/font-size-picker.component';
import { FontBoldnessSwitchComponent } from './font-styler/font-boldness-switch/font-boldness-switch.component';
import { FontStyleSwitchComponent } from './font-styler/font-style-switch/font-style-switch.component';
import { FontStylerComponent } from './font-styler/font-styler.component';
import { FieldCreatorComponent } from './field-creator/field-creator.component';
import { PatternsComponent } from './patterns.component';


@NgModule({
	imports: [ CommonModule, FormsModule, MaterialModule.forRoot() ],
   	declarations:[  
   		PatternsComponent, 
   		PatternFieldComponent, 
   		FieldCreatorComponent,
         FontColorPickerComponent,
         FontFamilyPickerComponent,
         FontSizePickerComponent,
         FontStylerComponent,
         FontBoldnessSwitchComponent,
         FontStyleSwitchComponent
          ],
   	providers: [ PatternFieldsService ],
      exports: [PatternsComponent ],
   	schemas:   [ CUSTOM_ELEMENTS_SCHEMA ]      
})
export class PatternsModule {
}