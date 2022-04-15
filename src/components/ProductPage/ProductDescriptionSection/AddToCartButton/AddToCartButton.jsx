import { Component } from 'react';
import { CartContext } from '../../../../context/CartContext';
import {
  AddProductToCartButton,
  AddedToCartButton,
  OutOfStockButton,
} from './AddToCartButton.styles';

class AddToCartButton extends Component {
  static contextType = CartContext;

  render() {
    const { inCart, onClick, inStock } = this.props;

    if (inCart) {
      return <AddedToCartButton>ADDED TO CART</AddedToCartButton>;
    }

    if (!inStock) {
      return <OutOfStockButton>OUT OF STOCK</OutOfStockButton>;
    }

    return (
      <AddProductToCartButton onClick={onClick}>
        ADD TO CART
      </AddProductToCartButton>
    );
  }
}

export default AddToCartButton;
