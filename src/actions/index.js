

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