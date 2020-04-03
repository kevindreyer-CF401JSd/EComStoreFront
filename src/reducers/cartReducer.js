const initialState = { 
  count: 0,
  contents: []
};
// const initialState = [];


const cartReducer = (cart = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      cart.contents.push(action.payload)
      cart.count = cart.count + 1
      console.log('cartReduc cart',cart)
      return cart;
    case 'DECREMENT':
      return cart;
    case 'RESET':
      return cart;
    default:
      return cart;
  }
}

export default cartReducer