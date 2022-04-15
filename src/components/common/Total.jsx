import { Component } from 'react';
import { CartContext } from '../../context/CartContext';

class Total extends Component {
  static contextType = CartContext;

  calculateSum = (productsArray) => {
    const symbol = productsArray[0].prices.filter(
      (price) => this.context.currency === price.currency.label
    )[0].currency.symbol;

    const total = productsArray.reduce(
      (sum, current) =>
        sum +
        current.prices.find(
          (price) => this.context.currency === price.currency.label
        ).amount *
          current.quantity,
      0
    );

    return `${symbol} ${+total.toFixed(2)}`;
  };

  render() {
    return <div>{this.calculateSum(this.props.products)}</div>;
  }
}

export default Total;
