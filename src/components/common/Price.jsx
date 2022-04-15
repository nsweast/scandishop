import { Component } from 'react';
import { CartContext } from '../../context/CartContext';

class Price extends Component {
  static contextType = CartContext;

  priceToDisplay = (array) => {
    return array.find(
      (object) => this.context.currency === object.currency.label
    );
  };

  render() {
    const { prices } = this.props;

    return (
      <div>
        {this.priceToDisplay(prices).currency.symbol}{' '}
        {this.priceToDisplay(prices).amount}
      </div>
    );
  }
}

export default Price;
