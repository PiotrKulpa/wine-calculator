import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TablesComponent } from './tables/tables.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: CalculatorComponent},
  {path: 'tabelki', component: TablesComponent},
  {path: 'kontakt', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TablesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
