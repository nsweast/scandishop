import { Component } from 'react';
import Categories from './Categories';
import Currency from './Currency';
import Logo from './Logo';
import Cart from './Cart';
import { CartContext } from '../../context/CartContext';
import MiniCart from '../MiniCart';
import {
  ActionsContainer,
  HeaderContainer,
  HeaderSection,
  LogoContainer,
  CategoriesContainer,
  StyledLink,
} from './Header.styles';
import { TransparentBackground } from '../common/TransparentBackground';
import CurrencySwitchTab from '../CurrencySwitchTab';

class Header extends Component {
  state = {
    miniCartActive: false,
    currencyTabActive: false,
  };

  static contextType = CartContext;

  toggleMiniCart = () => {
    this.setState((prevState) => {
      return {
        miniCartActive: !prevState.miniCartActive,
        currencyTabActive: false,
      };
    });
  };

  toggleCurrencySwitcher = () => {
    this.setState((prevState) => {
      return {
        miniCartActive: false,
        currencyTabActive: !prevState.currencyTabActive,
      };
    });
  };

  render() {
    const productsAdded = this.context.products.length;
    const { miniCartActive, currencyTabActive } = this.state;

    return (
      <HeaderSection>
        {miniCartActive && (
          <TransparentBackground onClick={this.toggleMiniCart} />
        )}
        <HeaderContainer>
          <CategoriesContainer>
            <Categories />
          </CategoriesContainer>

          <LogoContainer>
            <Logo />
          </LogoContainer>

          <ActionsContainer>
            <Currency onClick={this.toggleCurrencySwitcher} />
            <Cart
              cartEmpty={productsAdded === 0}
              cartCounter={productsAdded}
              onClick={this.toggleMiniCart}
            />
            {currencyTabActive && (
              <CurrencySwitchTab onClick={this.toggleCurrencySwitcher} />
            )}

            {miniCartActive && <MiniCart onClick={this.toggleMiniCart} />}
          </ActionsContainer>
        </HeaderContainer>
      </HeaderSection>
    );
  }
}

export default Header;
