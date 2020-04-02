const initialState = ['testitem1','testitem2'];
let cart = initialState

const cartReducer = (state = cart, action) => {
  console.log('in cart reduc',action)
  switch (action.type) {
    case 'INCREMENT':
      cart.push(action.payload)
      console.log('cart INCREMENT',cart)
      return cart
    case 'DECREMENT':
      console.log('cart DECREMENT',cart)
      cart.splice(0,1)
      return cart
    case 'RESET':
      return initialState;
    default:
      return initialState;
  }
}

export default cartReducer