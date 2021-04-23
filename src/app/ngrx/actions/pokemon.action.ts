import { createAction, props } from '@ngrx/store';;

export const SET_BUSQUEDA_POKEMON = createAction('[Catálogo] Pokemon a buscar',  props<{search: string}>());

export const SET_POKEMON_ELEGIDO = createAction('[Catálogo] Guardar pokemon elegido',  props<{pokemonSelected: any}>());

export const SET_PAGE_SELECTED = createAction('[Catálogo] Página seleccionada',  props<{pageSelected: number}>());