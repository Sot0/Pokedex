import { AppStateI } from '../interfaces/models';
export const initialState: AppStateI = {
    userData: {
        username: 'Soto',
        name: 'Hugo Luis Soto Reyes',
        age: 23,
        email: 'root.luissoto@gmail.com',
    },
    pokemonData: {
        search: '',
        pokemonSelected: null,
        pageSelected: 0
    }
};