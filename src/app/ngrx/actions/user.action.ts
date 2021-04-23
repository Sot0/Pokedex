import { createAction, props } from '@ngrx/store';
import { UserI } from '../../interfaces/models';
export const SET_INFO_USUARIO = createAction('[Usuario] cambiar información',  props<{userData: UserI}>());