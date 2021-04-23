import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateI, PokemonI } from '../../../interfaces/models';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(private _store: Store<AppStateI>) {}

  ngOnInit(): void {
    this._store.select('pokemonData').subscribe((state: PokemonI) => {
      this.pokemon = state.pokemonSelected;
    });
  }

  getColor(types: any[]): string {
    if (!types.length) {
      return '#dadada';
    }
    switch (types[0].type?.name) {
      case 'fire':
        return '#f4a259';
      case 'normal':
        return '#dadada';
      case 'water':
        return '#5fc2e9';
      case 'grass':
        return '#4caf89';
      case 'bug':
        return '#09d101';
      case 'poison':
        return '#9542c1';
      case 'electric':
        return '#f2ee88';
      case 'fairy':
        return '#f7417b';
      case 'ground':
        return '#495161';
      case 'fighting':
        return '#99485f';
      case 'psychic':
        return '#e64d90';
      case 'ghost':
        return '#d110da';
      case 'rock':
        return '#846070';
      default:
        return '#dadada';
    }
  }
}
