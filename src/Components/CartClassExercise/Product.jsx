import React, { Component } from 'react';
import { CartContext } from './CartContext';
import ButtonCart from './ButtonCart';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  width: 420px;
  background-color: hsl(0, 0%, 100%);
  gap: 1rem;
  padding: 1rem;

  p {
    color: gray;
  }
  h1 {
    color: hsl(158, 36%, 27%);
  }
  .card--content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export default class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <Card>
        <img
          src={product.image}
          alt=''
          style={{ width: '100%', height: '50%' }}
        />
        <div className='card--content'>
          <p>{product.category.toUpperCase()}</p>
          <h1>{product.title}</h1>
          <p>{product.description.substring(0, 100)}</p>
          <h1>${product.price.toFixed(2)}</h1>
          <ButtonCart
            label='Add to cart'
            type='add'
            onClick={() => this.context.addToCart(product)}
          />
        </div>
      </Card>
    );
  }
}
Product.contextType = CartContext;
