import React, { Component } from 'react';
import { CartContext } from './CartContext';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1em',
          backgroundColor: 'white',
          position: 'fixed',
          width: '96%',
          borderRadius: '10px',
        }}>
        <h1>Store</h1>
        <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
          <h2>
            <MdOutlineShoppingCart />
            <span>Cart</span>
          </h2>
          <h2>{this.context.cartList.length}</h2>
        </div>
      </div>
    );
  }
}
Navbar.contextType = CartContext;
