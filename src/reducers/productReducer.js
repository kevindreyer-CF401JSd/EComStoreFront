const initialState = {
  products: [
    {
      category: "Fruits",
      name: "Bananas",
      description: "Fresh banana bunches",
      price: 5,
      inventory: 10
    },
    {
      category: "Fruits",
      name: "Mandarins",
      description: "Fresh Mandarin in a bag",
      price: 6,
      inventory: 10
    },
    {
      category: "Fruits",
      name: "Apples",
      description: "Fresh Apples",
      price: 1,
      inventory: 30
    },
    {
      category: "Vegetables",
      name: "Carrots",
      description: "Fresh Carrot in a bag",
      price: 4,
      inventory: 20
    },
    {
      category: "Vegetables",
      name: "Peas",
      description: "Frozen Peas in a bag",
      price: 3,
      inventory: 20
    },
    {
      category: "Vegetables",
      name: "Grean Beans",
      description: "Fresh Grean Beans in a bag",
      price: 5,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Peanuts",
      description: "Fresh Peanuts in a bag",
      price: 5,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Walnuts",
      description: "Fresh Walnuts in a bag",
      price: 7,
      inventory: 20
    },
    {
      category: "Nuts",
      name: "Hazelnuts",
      description: "Fresh Hazelnuts in a jar",
      price: 7,
      inventory: 10
    }
  ]
};

const productReducer = (state = initialState.products, action) => {
  let products;
  // console.log('in prod reduc',action)
  switch (action.type) {
    case 'SELECT_CATEGORY':
      if (!action.payload) return initialState;
      products = initialState.products.filter(product => product.category === action.payload )
      // console.log('sel cat', products)
      return products
    case "RESET":
      // console.log("reset", state);
      return initialState.products;
    default:
      return state;
  }
};

export default productReducer;

export function fruits(name) {
  return {
    type: "FRUITS",
    payload: name
  };
}

export function vegetables(name) {
  return {
    type: "VEGETABLES",
    payload: name
  };
}

export function nuts(name) {
  return {
    type: "NUTS",
    payload: name
  };
}

export function reset() {
  return {
    type: "RESET"
  };
}
