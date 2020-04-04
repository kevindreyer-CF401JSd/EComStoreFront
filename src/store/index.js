import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer";
import cartReducer from "../reducers/cartReducer"

const store = configureStore({
  reducer: { productReducer, categoryReducer, cartReducer }
})

export default store;
