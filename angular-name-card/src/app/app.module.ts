import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './component/name-card/name-card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RatingBarComponent } from './component/rating-bar/rating-bar.component';
import { DemoFormComponent } from './component/demo-form/demo-form.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { TodoComponent } from './component/todo/todo.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { TimelinesComponent } from './component/timelines/timelines.component';
import { YoutubePlaylistComponent } from './component/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    DemoFormComponent,
    ProductFormComponent,
    FormRegisterComponent,
    TodoComponent,
    PageNotFoundComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent
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
