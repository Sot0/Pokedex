export interface AppStateI {
  userData: UserI;
  pokemonData: PokemonI;
}

export interface UserI {
  username: string;
  name: string;
  age: number;
  email: string;
}

export interface PokemonI {
  search: string;
  pokemonSelected: any;
  pageSelected: number;
}

export interface PokeapiResultI {
  count: number;
  next: string;
  previous: string;
  results: PokemonPaginationI[];
}

export interface PokemonPaginationI {
  name: string;
  url: string;
}
