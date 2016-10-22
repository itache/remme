import { NgModule }      from '@angular/core';
import { RouterModule }      from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpModule }  from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { AuthComponent} from './auth/auth.component';
import { LoginFormComponent} from './auth/login-form/login-form.component';
import { RegistrationFormComponent} from './auth/registration-form/registration-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthService } from './auth.service';

@NgModule({
   imports: [ 
   	FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule,
      CommonModule,
   	MaterialModule.forRoot()
   	],
   exports: 	    [ AboutComponent, AuthComponent, UserDetailsComponent],
   declarations:   [ AboutComponent, AuthComponent, UserDetailsComponent, LoginFormComponent, RegistrationFormComponent],
   providers:      [ AuthService, CookieService ],
   schemas:        [ CUSTOM_ELEMENTS_SCHEMA ]    
})
export class CoreModule {}