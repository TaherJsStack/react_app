import cartSlice from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const Store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default Store;
