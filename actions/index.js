import request from 'superagent'
import { 
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  RECEIVE_PRODUCTS } from '../constants/ActionTypes'

export function getAllProducts() {
  return dispatch => {
    request.get('/products')
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err) {
        return new Error(err);
      }

      dispatch({
        type: RECEIVE_PRODUCTS,
        products: res.body
      })
    })
  }
}

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  }
}

export function checkout(products) {
  return {
      type: CHECKOUT_REQUEST
  }
}
