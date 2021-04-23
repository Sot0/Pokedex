import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI, PokemonI } from '../../../interfaces/models';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private _store: Store<AppStateI>
  ) {
    
  }

  ngOnInit(): void {
    this._store.select('pokemonData').subscribe((state: PokemonI) => {
      this.pokemon = state.pokemonSelected;
    });
  }

}
