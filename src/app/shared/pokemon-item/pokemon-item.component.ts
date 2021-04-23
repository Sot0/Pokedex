import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { AppStateI } from '../../interfaces/models';
import { SET_POKEMON_ELEGIDO } from '../../ngrx/actions/pokemon.action';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input('pokemon') pokemon: any;

  constructor(
    private _store: Store<AppStateI>,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  getColor(types: any[]): string {
    if (!types.length) {
      return '#dadada';
    }
    switch (types[0].type?.name) {
      case 'fire': return '#f4a259';
      case 'normal': return '#dadada';
      case 'water': return '#5fc2e9';
      case 'grass': return '#4caf89';
      case 'bug': return '#09d101';
      case 'poison': return '#9542c1';
      case 'electric': return '#f2ee88';
      case 'fairy': return '#f7417b';
      case 'ground': return '#495161';
      case 'fighting': return '#99485f';
      case 'psychic': return '#e64d90';
      case 'ghost': return '#d110da';
      case 'rock': return '#846070';
      default: return '#dadada';
    }
  }

  public pokemonSelected(): void {
    const action: Action = SET_POKEMON_ELEGIDO({ pokemonSelected: this.pokemon });
    this._store.dispatch(action);
    this._router.navigateByUrl('detail');
  }

}
