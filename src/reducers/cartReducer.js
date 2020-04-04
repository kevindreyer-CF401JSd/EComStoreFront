const initialState = { 
  totalCount: 0,
  contents: {}
};

const cartReducer = (cart = initialState, action) => {
  console.log('in cart reduc',action)
  const cartContents = cart.contents
  switch (action.type) {
    case 'INCREMENT':
      let newContents = {...cartContents}
      if (!(action.payload in newContents)) {
        newContents[action.payload] = 1
      } else {
        newContents[action.payload] = newContents[action.payload] + 1
      }
      return {
        totalCount: cart.totalCount + 1,
        contents: newContents
      }
    case 'DECREMENT':
      let decContents = {...cartContents}
      if (decContents[action.payload] === 1) {
        delete decContents[action.payload]
      } else {
        decContents[action.payload] = decContents[action.payload] - 1
      }
      return {
        totalCount: cart.totalCount - 1,
        contents: decContents
      }
    // case 'RESET':
    //   return cart;
    default:
      return cart;
  }
}

export default cartReducer