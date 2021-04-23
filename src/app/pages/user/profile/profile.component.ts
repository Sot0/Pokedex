import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserI, AppStateI } from '../../../interfaces/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: UserI;

  constructor(private _store: Store<AppStateI>) {
    this._store.select('userData').subscribe((state: UserI) => {
      this.user = state;
    });
  }

  ngOnInit(): void {}
}
