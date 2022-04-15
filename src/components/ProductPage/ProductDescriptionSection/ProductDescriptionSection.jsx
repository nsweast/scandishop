import React, { Component } from 'react';
import Attribute from '../../common/Attribute';
import { CartContext } from '../../../context/CartContext';
import AddToCartButton from './AddToCartButton';
import {
  ItemDescription,
  ItemAttribute,
  ItemPrice,
  ItemTitle,
  ProductDescriptionContainer,
} from './ProductDescriptionSection.styles';
import { checkInCart } from '../../../helpers';
import { AttributesContainer } from '../../common/Attribute/Attribute.styles';
import Price from '../../common/Price';

class ProductDescriptionSection extends Component {
  state = {
    selectedAttributes: [],
  };

  static contextType = CartContext;

  selectAttribute = (name, value) => {
    const attributeExists = this.state.selectedAttributes.find(
      (object) => name in object
    );

    if (!!attributeExists) {
      this.setState((prevState) => {
        return {
          selectedAttributes: prevState.selectedAttributes.map((attribute) => {
            if (name in attribute) {
              return { [name]: value };
            } else {
              return attribute;
            }
          }),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          selectedAttributes: [
            ...prevState.selectedAttributes,
            { [name]: value },
          ],
        };
      });
    }
  };

  checkAttributeValue = (name) => {
    const attribute = this.state.selectedAttributes.find(
      (object) => name in object
    );

    if (!!attribute) {
      return attribute[name];
    } else {
      return null;
    }
  };

  render() {
    const { id, name, brand, description, inStock, prices, attributes } =
      this.props.info;

    return (
      <ProductDescriptionContainer>
        <ItemTitle>
          <strong>{brand}</strong> {name}
        </ItemTitle>

        {!!attributes.length &&
          attributes.map((attribute) => {
            return (
              <ItemAttribute key={attribute.id}>
                <span>{attribute.name}:</span>
                <AttributesContainer>
                  {attribute.items.map((item) => (
                    <Attribute
                      key={item.id}
                      text={item.value}
                      selected={
                        this.checkAttributeValue(attribute.name) ===
                        item.displayValue
                      }
                      onClick={() =>
                        this.selectAttribute(attribute.name, item.displayValue)
                      }
                      type={attribute.type}
                      color={item.value}
                      disabled={!inStock}
                    />
                  ))}
                </AttributesContainer>
              </ItemAttribute>
            );
          })}

        <ItemPrice>
          <span>PRICE:</span>
          <strong>
            <Price prices={prices} />
          </strong>
        </ItemPrice>

        <AddToCartButton
          inCart={checkInCart(this.context.products, id)}
          inStock={inStock}
          onClick={() =>
            this.context.addProductToCart(
              this.props.info,
              this.state.selectedAttributes
            )
          }
        />
        <ItemDescription dangerouslySetInnerHTML={{ __html: description }} />
      </ProductDescriptionContainer>
    );
  }
}

export default ProductDescriptionSection;
