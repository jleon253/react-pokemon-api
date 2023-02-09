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

export const updatePokemon = createAsyncThunk(
  'updatePokemonsThunk',
  async (data: Pokemon) => {
    const dataBody: Pokemon = {
      ...data,
      idAuthor: 253,
    };
    const response = await axios.put(`${env.VITE_URL_ALL_POKEMONS}${data.id}`, dataBody);

    return response.data.json;
  }
);

export const updatePokemonSlice = createSlice({
  name: 'updatePokemon',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePokemon.fulfilled, (state, action: Action) => {
        state.data = action.payload,
        state.isLoading = false,
        state.error = null
      })
      .addCase(updatePokemon.pending, (state) => {
        state.isLoading = true,
        state.error = null
      })
      .addCase(updatePokemon.rejected, (state) => {
        state.data = {},
        state.isLoading = false,
        state.error = {
          statusCode: 400,
          message: 'Back End server error'
        }
      })
  }
});

export default updatePokemonSlice.reducer;