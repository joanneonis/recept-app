import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ReceptTeaserComponent } from './recept-teaser/recept-teaser.component';
import { ReceptListComponent } from './recept-list/recept-list.component';
import { ReceptFullComponent } from './recept-full/recept-full.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
	{ path: 'recepten', component: ReceptListComponent },
	{ path: 'toevoegen', component: AddReceptComponent },
	{ path: 'recept/:id', component: ReceptFullComponent },
	{ path: 'recept/:id/bewerken', component: AddReceptComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddReceptComponent,
    ReceptTeaserComponent,
    ReceptListComponent,
    ReceptFullComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }

