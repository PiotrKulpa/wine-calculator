import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pl';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

registerLocaleData(localeFr, 'pl');
import { FormatNumberPipe } from './format-number.pipe'

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorEnComponent } from './calculator/calculator.en.component';
import { TablesComponent } from './tables/tables.component';
import { ContactComponent } from './contact/contact.component';
import { ContactEnComponent } from './contact/contact.en.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  {path: '', component: CalculatorComponent},
  {path: 'en', component: CalculatorEnComponent},
  {path: 'tabelki', component: TablesComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'contact', component: ContactEnComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorEnComponent,
    TablesComponent,
    ContactComponent,
    ContactEnComponent,
    NotFoundComponent,
    FormatNumberPipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
