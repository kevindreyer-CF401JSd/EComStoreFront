// import { createStore, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer";
import cartReducer from "../reducers/cartReducer"

// const rootReducer = combineReducers({ 
//   products: productReducer, 
//   cart: cartReducer, 
//   categories: categoryReducer
// });

// const store = () => {
//   return createStore(rootReducer);
// };

const store = configureStore({
  reducer: { productReducer, categoryReducer, cartReducer }
})

export default store;
