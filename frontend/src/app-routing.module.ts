import { RouterModule } from '@angular/router';

import { DecksComponent } from './app/deck/decks.component';
import { AuthComponent } from './app/core/auth/auth.component';
import { AboutComponent } from './app/core/about/about.component';
import { AuthService } from './app/core/auth.service';


const routes = [
	{path: '', redirectTo: 'decks', pathMatch: 'full'},
	{path: 'about', canActivate: [AuthService], component: AboutComponent},
	{path: 'auth', component: AuthComponent},
	{path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes, { useHash: true })