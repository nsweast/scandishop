import { Component } from 'react';
import {
  AttributeButton,
  SelectedAttribute,
  UnavailableAttribute,
} from './Attribute.styles';

class Attribute extends Component {
  render() {
    const { selected, disabled, text, miniCart, type, color, onClick } =
      this.props;

    if (disabled) {
      return (
        <UnavailableAttribute type={type} color={color}>
          {type === 'text' ? text : null}
        </UnavailableAttribute>
      );
    }

    if (selected) {
      return (
        <SelectedAttribute miniCart={miniCart} type={type} color={color}>
          {type === 'text' ? text : null}
        </SelectedAttribute>
      );
    }

    return (
      <AttributeButton
        miniCart={miniCart}
        color={color}
        type={type}
        onClick={onClick}
      >
        {type === 'text' ? text : null}
      </AttributeButton>
    );
  }
}

export default Attribute;
