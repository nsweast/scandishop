import { Component } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CounterButton, CounterContainer } from './Counter.styles';

class Counter extends Component {
  static contextType = CartContext;

  render() {
    const { add, subtract, miniCart } = this.props;
    return (
      <CounterContainer>
        <CounterButton onClick={add} miniCart={miniCart}>
          +
        </CounterButton>
        {this.props.quantity}
        <CounterButton onClick={subtract} miniCart={miniCart}>
          -
        </CounterButton>
      </CounterContainer>
    );
  }
}

export default Counter;
