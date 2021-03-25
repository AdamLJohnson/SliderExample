import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NouisliderModule } from 'ng2-nouislider';
import { BadgeComponent } from './badge/badge.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
