import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PagesRoutingModule } from './pages-routing.module';

import { CatalogComponent } from './main/catalog/catalog.component';
import { PokemonDetailComponent } from './main/pokemon-detail/pokemon-detail.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { ProfileComponent } from './user/profile/profile.component';


import { SharedModule } from '../shared/shared.module';
import { PokeapiService } from 'app/services/pokeapi.service';

@NgModule({
  declarations: [
    ProfileComponent,
    CatalogComponent,
    PokemonDetailComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PagesRoutingModule,
    SharedModule,

    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [
    PokeapiService
  ]
})
export class PagesModule { }
