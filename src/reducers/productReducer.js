
const initialState = {
  inventory: [],
  list: []
};

const productReducer = (state = initialState, action) => {
  // console.log('in prod reduc', state)
  const inventory = state.inventory
  switch (action.type) {
    case 'SELECT_CATEGORY':
      const products = [...inventory]
      // console.log('select cat action',action)
      // console.log('select cat state',state)
      if (action.payload === '') return {inventory: products, list: products};
      return {
        inventory: state.inventory,
        list: products.filter(product => product.category === action.payload)
      }
    // case "RESET":
    //   return action.payload;
    case "FETCH_ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;