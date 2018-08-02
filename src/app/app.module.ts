import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pl';

registerLocaleData(localeFr, 'pl');
import { FormatNumberPipe } from './format-number.pipe'

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TablesComponent } from './tables/tables.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: CalculatorComponent},
  {path: 'tabelki', component: TablesComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TablesComponent,
    ContactComponent,
    NotFoundComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
