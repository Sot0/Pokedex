import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

import { NavbarComponent } from './navbar/navbar.component';

import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PokemonItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatBadgeModule
  ],
  exports: [
    NavbarComponent,
    PokemonItemComponent,
  ]
})
export class SharedModule { }
