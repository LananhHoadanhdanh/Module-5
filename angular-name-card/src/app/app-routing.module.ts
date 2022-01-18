import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {FormRegisterComponent} from "./component/form-register/form-register.component";
import {ProductFormComponent} from "./component/product-form/product-form.component";
import {TimelinesComponent} from "./component/timelines/timelines.component";

const routes: Routes = [
  { path: 'register', component: FormRegisterComponent },
  { path: 'product', component: ProductFormComponent },
  {path: 'timelines', component: TimelinesComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
