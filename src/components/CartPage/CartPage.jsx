import React, { Component } from 'react';
import Attribute from '../common/Attribute';
import Counter from '../common/Counter/Counter';
import { CartContext } from '../../context/CartContext';
import {
  CartItemLeftSection,
  CartItemRightSection,
  CartProductTitle,
  CartPageProduct,
  CartPageContainer,
  CartAttributesSection,
} from './CartPage.styles';
import { AttributesContainer } from '../common/Attribute/Attribute.styles';
import { isAttributeSelected } from '../../helpers';
import Price from '../common/Price';
import Slider from '../common/Slider';

class CartPage extends Component {
  static contextType = CartContext;

  render() {
    const { products, add, subtract, changeAttributeFromCart } = this.context;

    return (
      <CartPageContainer>
        <h2>CART</h2>

        {products.map((product) => (
          <CartPageProduct key={product.id}>
            <CartItemLeftSection>
              <CartProductTitle>
                <span>{product.brand}</span> {product.name}
              </CartProductTitle>

              <strong>
                <Price prices={product.prices} />
              </strong>

              {product.attributes.map((attribute) => {
                return (
                  <CartAttributesSection key={attribute.id}>
                    {attribute.name + ': '}
                    <AttributesContainer>
                      {attribute.items.map((item) => (
                        <Attribute
                          miniCart
                          key={item.id}
                          text={item.value}
                          type={attribute.type}
                          color={item.value}
                          selected={
                            isAttributeSelected(
                              products,
                              product.id,
                              attribute.name
                            ) === item.displayValue
                          }
                          onClick={() =>
                            changeAttributeFromCart(
                              product.id,
                              attribute.name,
                              item.displayValue
                            )
                          }
                        />
                      ))}
                    </AttributesContainer>
                  </CartAttributesSection>
                );
              })}
            </CartItemLeftSection>

            <CartItemRightSection>
              <Counter
                quantity={product.quantity}
                add={() => add(product.id)}
                subtract={() => subtract(product.id)}
              />
              <Slider photos={product.gallery} />
            </CartItemRightSection>
          </CartPageProduct>
        ))}
      </CartPageContainer>
    );
  }
}

export default CartPage;
