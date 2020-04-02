const initialState = {
  selectedCategory: '',
  categories: [
    { name: "Fruits", displayName: "Fruits", description: "Fruits" }, 
    { name: "Vegetables", displayName: "Vegetables", description: "Vegetables"  }, 
    { name: "Nuts", displayName: "Nuts", description: "Nuts"  }]
};

const categoryReducer = (state = initialState, action) => {
  // console.log('cat reducer',state)
  switch (action.type) {
    case 'SELECT_CATEGORY':
      // if (!action.payload) return initialState
      // products = initialState.products.filter(product => product.name === action.payload )
      return { ...state, selectedCategory: action.payload }
    default:
      return state
  }
}

export default categoryReducer