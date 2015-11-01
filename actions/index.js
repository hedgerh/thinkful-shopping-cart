import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  RECEIVE_PRODUCTS
} from '../constants/ActionTypes';

// import a library for data fetching, such as superagent

export function getAllProducts() {
  // Fetch the product data from the '/products' API endpoint.
  // After it returns, dispatch an action to add the products.
  // The products should be under action.products when sent to the reducer.
  // Action type should be RECEIVE_PRODUCTS
}

export function addToCart(productId) {
  // Return an ADD_TO_CART action with a productId property.
}

export function checkout(products) {
  // Return a CHECKOUT_REQUEST action.
}
