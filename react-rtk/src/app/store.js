import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecrreamSlice";
import fetchUsers from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: fetchUsers,
  },
});

export default store;
