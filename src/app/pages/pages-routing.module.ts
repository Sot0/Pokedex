import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './main/catalog/catalog.component';
import { PokemonDetailComponent } from './main/pokemon-detail/pokemon-detail.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'detail',
    component: PokemonDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
