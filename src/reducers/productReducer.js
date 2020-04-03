
const initialState = [];

const productReducer = (state = initialState, action) => {
  console.log('in prod reduc', state)
  switch (action.type) {
    case 'SELECT_CATEGORY':
      console.log('select cat action',action)
      console.log('select cat state',state)
      // if (!action.payload) return initialState;
      return state.filter(product => product.category === action.payload)
    case "RESET":
      return action.payload;
    case "FETCH_ALL_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;