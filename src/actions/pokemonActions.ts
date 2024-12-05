import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonClient } from "pokenode-ts";

// Define the async thunk
export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons", // Action type
  async (
    { offset, page }: { offset: number; page: number },
    { rejectWithValue }
  ) => {
    const api = new PokemonClient();

    console.log("FETCHING POKEMONS NOW...");

    try {
      const res = await api.listPokemons(offset, page); // Call API with offset and page

      console.log("pokemon list:", res.results);

      if (offset > 1) {
        return {
          data: res.results,
          isPaginating: true,
        };
      }
      return res.results; // Return the results to be used in the fulfilled state
    } catch (err) {
      return rejectWithValue(err); // Reject with the error if there's an issue
    }
  }
);
