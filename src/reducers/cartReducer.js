const initialState = 0;

const cartReducer = (items = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('items INCREMENT',items)
      return items + 1;
    case 'DECREMENT':
      console.log('items DECREMENT',items)
      return items - 1;
    case 'RESET':
      return initialState;
    default:
      return items;
  }
}

export default cartReducer