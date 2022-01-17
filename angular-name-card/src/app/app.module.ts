import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    DemoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
