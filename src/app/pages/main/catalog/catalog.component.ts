import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { mergeMap, concatMap, map, tap } from 'rxjs/operators';
import { PokemonPaginationI, PokemonI, AppStateI } from '../../../interfaces/models';
import { PokeapiService } from '../../../services/pokeapi.service';
import { SET_PAGE_SELECTED } from '../../../ngrx/actions/pokemon.action';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  paginationOptions = {
    length: 0,
    pageSize: 20,
    pageSizeOptions: [20],
  }
  pageSelected: number = 0;
  pokemons: PokemonPaginationI[] = [];

  constructor(
    private _pokemonService: PokeapiService,
    private _store: Store<AppStateI>,
  ) { }

  ngOnInit(): void {
    this._store.select('pokemonData').subscribe((state: PokemonI) => {
      if (state.search) {
        this.getPokemonById(state.search)
      } else if (state.pageSelected === 0 || this.pageSelected !== state.pageSelected) {
        this.pokemons = [];
        this.pageSelected = state.pageSelected;
        this.getCatalog(state.pageSelected);
      }
    });
  }

  private getCatalog(pageSelected: number): void {
    this._pokemonService.paginate(pageSelected)
    .pipe(
      mergeMap((x: any) => x),
      tap((poke: any) => poke),
      concatMap((pokemon: any) => {
        return this._pokemonService.getPokemonByUrl(pokemon.url)
          .pipe(
            map((pokeDetail: any) => ({
              ...pokemon,
              ...pokeDetail,
            }))
          )
      })
    )
      .subscribe((resp: any) => {
        this.pokemons.push(resp);
        this.paginationOptions.length = this._pokemonService.totalItems;
      }, () => this.pokemons = [])
  }

  private getPokemonById(search: string): void {
    this.pokemons = [];
    this._pokemonService.getPokemonByNameNumber(search)
      .subscribe((resp: any) => {
        this.pokemons.push(resp);
        this.paginationOptions.length = 1;
      });
  }

  pageChange(event: any): void {
    this.pokemons = [];
    const action: Action = SET_PAGE_SELECTED({pageSelected: event.pageIndex});
    this._store.dispatch(action);
  }

}
