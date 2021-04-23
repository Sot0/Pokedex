import { Action, createReducer, on } from '@ngrx/store';
import { PokemonI } from '../../interfaces/models';
import * as PokemonAction from '../actions/pokemon.action';
import { initialState } from '../app.state';

const appReducer = createReducer(
  initialState.pokemonData,
  on(PokemonAction.SET_BUSQUEDA_POKEMON, (state, { search }) => ({
    ...state,
    search,
  })),
  on(PokemonAction.SET_POKEMON_ELEGIDO, (state, { pokemonSelected }) => ({
    ...state,
    pokemonSelected,
  })),
  on(PokemonAction.SET_PAGE_SELECTED, (state, { pageSelected }) => ({
    ...state,
    pageSelected,
  })),
);

export function reducer(state: PokemonI, action: Action) {
  return appReducer(state, action);
}
