
const initialState = {
  inventory: [],
  list: []
};

const productReducer = (state = initialState, action) => {
  const inventory = state.inventory
  switch (action.type) {
    case 'SELECT_CATEGORY':
      const products = [...inventory]
      if (action.payload === '') return {inventory: products, list: products};
      return {
        inventory: state.inventory,
        list: products.filter(product => product.category === action.payload)
      }
    case "FETCH_ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;