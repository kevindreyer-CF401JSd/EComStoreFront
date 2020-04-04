

export function reset() {
  return {
    type: "RESET"
  };
}

export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name
  };
}

export function decrement(name) {
  return {
    type: 'DECREMENT',
    payload: name
  };
}

export function addToCart(name) {
  return {
    type: 'ADD_TO_CART',
    payload: name
  };
}

export function selectCategory(name) {
  return {
    type: 'SELECT_CATEGORY',
    payload: name
  }
}

export function fetchAllProducts() {
  return async dispatch => {
    const raw = await fetch('http://localhost:3032/products');
    const data = await raw.json();
    return dispatch(fetchAllProductsAction(data));
  };
}

function fetchAllProductsAction(data) {
  return {
    type: 'FETCH_ALL_PRODUCTS',
    payload: {
      inventory: data,
      list: data
    }
  };
}