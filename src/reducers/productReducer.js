const initialState = [];

const productReducer = (state = initialState, action) => {
  let products;
  switch (action.type) {
    case 'SELECT_CATEGORY':
      if (!action.payload) return initialState;
      products = initialState.products.filter(product => product.category === action.payload )
      return products
    case "RESET":
      return initialState.products;
    case "FETCH_ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;