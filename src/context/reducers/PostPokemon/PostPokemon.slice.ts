import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { env } from "../../../constants";
import { NewPokemon, Pokemon } from "../../../ts";

interface Action {
  payload: any
};

const INITIAL_STATE: NewPokemon = {
  data: {},
  isLoading: false,
  error: null
}

export const postPokemon = createAsyncThunk(
  'postPokemonsThunk',
  async (data: Pokemon) => {
    const dataBody: Pokemon = {
      ...data,
      idAuthor: 253,
    };
    const response = await axios.post(env.VITE_URL_ALL_POKEMONS, dataBody);

    return response.data.json;
  }
);

export const postPokemonSlice = createSlice({
  name: 'postPokemon',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPokemon.fulfilled, (state, action: Action) => {
        state.data = action.payload,
        state.isLoading = false,
        state.error = null
      })
      .addCase(postPokemon.pending, (state) => {
        state.isLoading = true,
        state.error = null
      })
      .addCase(postPokemon.rejected, (state) => {
        state.data = {},
        state.isLoading = false,
        state.error = {
          statusCode: 400,
          message: 'Back End server error'
        }
      })
  }
});

export default postPokemonSlice.reducer;