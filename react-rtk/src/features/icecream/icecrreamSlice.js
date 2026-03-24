import { ordered as cakeOrdered, restocked as cakeRestocked } from "../cake/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIcecream--;
    },
    restocked: (state, action) => {
      state.noOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.noOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
