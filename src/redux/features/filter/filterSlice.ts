import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Filter = "all" | "fiction" | "novel" | "historical";

type IInitialState = {
  filter: Filter;
  searchTerm: string;
};

const initialState: IInitialState = {
  filter: "all",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChanged: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    searchTermChanged: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { filterChanged, searchTermChanged } = filterSlice.actions;

export default filterSlice.reducer;
