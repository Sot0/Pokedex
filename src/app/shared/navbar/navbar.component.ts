import { Component, Input, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppStateI, UserI } from '../../interfaces/models';
import { SET_BUSQUEDA_POKEMON } from '../../ngrx/actions/pokemon.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isNavbar = true;
  username: string;
  searchValue: string;

  constructor(private _store: Store<AppStateI>) {
    this._store.select('userData').subscribe((state: UserI) => {
      this.username = state.username;
    });
  }

  ngOnInit(): void {}

  public searchPokemon() {
    const action: Action = SET_BUSQUEDA_POKEMON({ search: this.searchValue });
    this._store.dispatch(action);
  }
}
