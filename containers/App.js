import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

export default class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <h2>Shopping Cart</h2>
        <hr/>
        <div className="Container">
          <ProductsContainer />
          <CartContainer />
        </div>
      </div>
    )
  }
}
