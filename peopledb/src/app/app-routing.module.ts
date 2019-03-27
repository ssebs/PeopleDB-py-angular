import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { HomeComponent } from './home/home.component';
import { PersonCreateComponent } from './person-create/person-create.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'detail/:id', component: PersonDetailComponent},
  { path: 'create', component: PersonCreateComponent},
  { path: 'search', component: PersonSearchComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
