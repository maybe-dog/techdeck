import { ColumnStore } from "@/features/home/type/types";
import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";

const columnSlice = createSlice({
  name: "column",
  initialState: {
    columns: [] as ColumnStore[],
  },
  reducers: {
    addColumn: (state, action: PayloadAction<ColumnStore>) => {
      state.columns.push(action.payload);
    },
    setColumns: (state, action: PayloadAction<ColumnStore[]>) => {
      state.columns = [...action.payload];
    },
  },
});

export default columnSlice;
