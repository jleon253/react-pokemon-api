import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { env } from '../../../constants';

// Typescript
import { Pokedex } from "../../../ts";


interface Action {
  payload: any
};

const INITIAL_STATE: Pokedex = {
  data: [],
  isLoading: false,
  error: null,
  countPokemons: 0
}

export const getPokemons = createAsyncThunk(
  'getPokemonsThunk',
  async () => {
    const response = await axios.get(env.VITE_URL_ALL_POKEMONS, { params: { idAuthor: 253 }})
    return response.data;
  }
);

export const getPokemonsSlice = createSlice({
  name: 'getPokemons',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.fulfilled, (state, action: Action) => {
        state.data = action.payload,
        state.isLoading = false,
        state.error = null,
        state.countPokemons = action.payload?.length
      })
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true,
        state.error = null
      })
      .addCase(getPokemons.rejected, (state) => {
        state.data = [],
        state.isLoading = false,
        state.error = {
          statusCode: 400,
          message: 'Back End server error'
        }
      })
  }
});

export default getPokemonsSlice.reducer;
