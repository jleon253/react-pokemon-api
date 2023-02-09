import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import GetPokemonsReducer from './reducers/GetPokemons';
import PostPokemonReducer from './reducers/PostPokemon';
import DeletePokemonReducer from "./reducers/DeletePokemon";

export const store = configureStore({
  reducer: {
    pokemons: GetPokemonsReducer,
    newPokemon: PostPokemonReducer,
    deletedPokemon: DeletePokemonReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export {
 getPokemons,
 getPokemonsSlice
} from './reducers/GetPokemons'

export {
 postPokemon,
 postPokemonSlice
} from './reducers/PostPokemon'

export {
 deletePokemon,
 deletePokemonSlice
} from './reducers/DeletePokemon'

export {
  updatePokemon,
  updatePokemonSlice
} from './reducers/UpdatePokemon';