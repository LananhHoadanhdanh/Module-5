import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {FormRegisterComponent} from "./component/form-register/form-register.component";
import {ProductFormComponent} from "./component/product-form/product-form.component";
import {TimelinesComponent} from "./component/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/youtube/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/youtube/youtube-player/youtube-player.component";
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";
import {ListHouseComponent} from "./component/house/list-house/list-house.component";
import {CreateHouseComponent} from "./component/house/create-house/create-house.component";
import {UpdateHouseComponent} from "./component/house/update-house/update-house.component";
import {HouseDetailComponent} from "./component/house/house-detail/house-detail.component";

const routes: Routes = [
  {path: 'register', component: FormRegisterComponent},
  {path: 'product', component: ProductFormComponent},
  {path: 'timelines', component: TimelinesComponent},
  {
    path: 'youtube', component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'products',
    children: [
      {
        path: '', component: ProductListComponent
      },
      {
        path: 'create', component: ProductCreateComponent
      }]
  },
  {
    path: 'houses',
    children: [
      { path: '', component: ListHouseComponent },
      { path: 'create', component: CreateHouseComponent },
      { path: 'update/:id', component: UpdateHouseComponent },
      { path: 'detail/:id', component: HouseDetailComponent },]
  },
  {path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
