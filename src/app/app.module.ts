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
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { OwlModule } from 'ng2-owl-carousel';
import { SearchComponent } from './search/search.component';
import { SupriseMeComponent } from './suprise-me/suprise-me.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { NouisliderModule, NouisliderComponent } from 'ng2-nouislider';
import { RangeFilterPipe } from './pipes/range-filter.pipe';
import 'hammerjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagingService } from './service/messaging.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
	{ path: '', component: ReceptListComponent },
	{ path: 'recepten', component: ReceptListComponent },
	{ path: 'suprise-me', component: SupriseMeComponent },
	{ path: 'toevoegen', component: AddReceptComponent },
	{ path: 'booschappenlijst', component: ShoppinglistComponent },
	{ path: 'recept/:id', component: ReceptFullComponent },
	{ path: 'recept/:id/bewerken', component: AddReceptComponent },
	{ path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddReceptComponent,
    ReceptTeaserComponent,
    ReceptListComponent,
    ReceptFullComponent,
    NavigationComponent,
    ShoppinglistComponent,
    SearchComponent,
    SupriseMeComponent,
    SearchFiltersComponent,
    CategoryFiltersComponent,
    RangeFilterPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		OwlModule,
		NouisliderModule,
		environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
		RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MessagingService, AngularFireAuth],
	bootstrap: [AppComponent],
	exports: [
    NouisliderComponent
  ],
})

export class AppModule { }

