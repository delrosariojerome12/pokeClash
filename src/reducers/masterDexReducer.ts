import { fetchPokemons } from "@actions/pokemonActions";
import { createSlice } from "@reduxjs/toolkit";

interface MasterDexState {
  dexListState: {
    data: any;
    isLoading: boolean;
    isError: boolean;
    isRefreshing: boolean;
    isPaginating: boolean;
    isSearching: boolean;
  };
  selectState: {
    selectedPokemon: any;
  };
}

const initialState: MasterDexState = {
  dexListState: {
    data: null,
    isError: false,
    isLoading: false,
    isPaginating: false,
    isRefreshing: false,
    isSearching: false,
  },
  selectState: { selectedPokemon: null },
};

const masterDexReducer = createSlice({
  name: "master-dex",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state, action) => {
        console.log("pending payload", action.payload);
        state.dexListState.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        console.log("fulfilled payload", action.payload);
        state.dexListState.isLoading = false;
        state.dexListState.data = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.dexListState.isError = true;
        state.dexListState.isLoading = false;
      });
  },
});

export const {} = masterDexReducer.actions;

export default masterDexReducer.reducer;
