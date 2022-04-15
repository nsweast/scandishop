import React, { Component } from 'react';
import { CartContext } from '../../context/CartContext';
import Attribute from '../common/Attribute';
import Counter from '../common/Counter/Counter';
import { MiniCartImage } from '../common/Images.styles';
import {
  CheckoutButton,
  MiniCartAttributeSection,
  MiniCartContainer,
  MiniCartHeadTitle,
  MiniCartItemContainer,
  MiniCartItemLeftSection,
  MiniCartItemRightSection,
  MiniCartNav,
  TotalAmount,
  ViewBagButton,
} from './MiniCart.styles';
import { AttributesContainer } from '../common/Attribute/Attribute.styles';
import { isAttributeSelected } from '../../helpers';
import Price from '../common/Price';
import Total from '../common/Total';

class MiniCart extends Component {
  static contextType = CartContext;

  render() {
    const { products, add, subtract, changeAttributeFromCart } = this.context;

    if (products.length > 0) {
      return (
        <MiniCartContainer>
          <MiniCartHeadTitle>
            <strong>My Bag, </strong>
            {products.length <= 1
              ? `${products.length} item`
              : `${products.length} items`}
          </MiniCartHeadTitle>

          {products.map((product) => {
            return (
              <MiniCartItemContainer key={product.id}>
                <MiniCartItemLeftSection>
                  <span>{product.brand}</span> {product.name}
                  <strong>
                    <Price prices={product.prices} />
                  </strong>
                  {product.attributes.map((attribute) => {
                    return (
                      <MiniCartAttributeSection key={attribute.id}>
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
                      </MiniCartAttributeSection>
                    );
                  })}
                </MiniCartItemLeftSection>
                <MiniCartItemRightSection>
                  <Counter
                    miniCart
                    quantity={product.quantity}
                    add={() => add(product.id)}
                    subtract={() => subtract(product.id)}
                  />
                  <MiniCartImage miniCart src={product.gallery[0]} />
                </MiniCartItemRightSection>
              </MiniCartItemContainer>
            );
          })}

          <TotalAmount>
            <strong>Total</strong>
            <strong>
              <Total products={products} />{' '}
            </strong>
          </TotalAmount>
          <MiniCartNav>
            <ViewBagButton onClick={this.props.onClick} to="/cart">
              VIEW BAG
            </ViewBagButton>
            <CheckoutButton to="/cart">CHECKOUT</CheckoutButton>
          </MiniCartNav>
        </MiniCartContainer>
      );
    }

    return (
      <MiniCartContainer showMiniCart={this.context.showMiniCart}>
        <MiniCartHeadTitle>
          <strong>My Bag, </strong>no items here yet
        </MiniCartHeadTitle>
      </MiniCartContainer>
    );
  }
}

export default MiniCart;
