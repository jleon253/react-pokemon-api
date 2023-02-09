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

export const deletePokemon = createAsyncThunk(
  'deletePokemonsThunk',
  async (data: Pokemon) => {
    const response = await axios.delete(`${env.VITE_URL_ALL_POKEMONS}${data.id}`, { params: { idAuthor: 253 }});

    return response.data.json;
  }
);

export const deletePokemonSlice = createSlice({
  name: 'deletePokemon',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deletePokemon.fulfilled, (state, action: Action) => {
        state.data = action.payload,
        state.isLoading = false,
        state.error = null
      })
      .addCase(deletePokemon.pending, (state) => {
        state.isLoading = true,
        state.error = null
      })
      .addCase(deletePokemon.rejected, (state) => {
        state.data = {},
        state.isLoading = false,
        state.error = {
          statusCode: 400,
          message: 'Back End server error'
        }
      })
  }
});

export default deletePokemonSlice.reducer;