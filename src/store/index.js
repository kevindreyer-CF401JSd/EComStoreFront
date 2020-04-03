import { configureStore } from '@reduxjs/toolkit'
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer";
import cartReducer from "../reducers/cartReducer"

// const rootReducer = combineReducers({ 
//   products: productReducer, 
//   cart: cartReducer, 
//   categories: categoryReducer
// });

// const store = () => {
//   return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// };

const store = configureStore({
  reducer: { productReducer, categoryReducer, cartReducer }
})

export default store;
// export default store();
