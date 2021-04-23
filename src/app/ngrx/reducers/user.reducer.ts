import { Action, createReducer, on } from "@ngrx/store";
import { AppStateI, UserI } from '../../interfaces/models';
import * as UserAction from '../actions/user.action';
import { initialState } from '../app.state';

const appReducer = createReducer(
    initialState.userData,
    on(UserAction.SET_INFO_USUARIO, (state, {userData}) => ({ ...state, userData })),
);

export function reducer( state: UserI, action: Action ) {
    return appReducer(state, action);
}