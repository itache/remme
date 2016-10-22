import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NotesService } from './notes.service';
import { NotesComponent } from './notes.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';



@NgModule({
	imports: [ CommonModule, FormsModule, MaterialModule.forRoot() ],
	exports: [ NotesComponent ],
   	declarations:[ NotesComponent, NoteCardComponent, NoteCreatorComponent, ColorPickerComponent ],
   	providers: [ NotesService ],
   	schemas:   [ CUSTOM_ELEMENTS_SCHEMA ]      
})
export class NotesModule{
}