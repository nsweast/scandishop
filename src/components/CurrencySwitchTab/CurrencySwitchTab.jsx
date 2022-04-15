import { Component } from 'react';
import { CurrencyTab, CurrencyTabContainer } from './CurrencySwitchTab.styles';
import { Query } from '@apollo/client/react/components';
import { CurrenciesQuery } from '../../queries';
import { CartContext } from '../../context/CartContext';

class CurrencySwitchTab extends Component {
  static contextType = CartContext;

  render() {
    return (
      <Query query={CurrenciesQuery}>
        {(result) => {
          if (result.loading) {
            return null;
          }

          return (
            <CurrencyTabContainer>
              {result.data.currencies.map((currency) => {
                return (
                  <CurrencyTab
                    key={currency.label}
                    onClick={() => {
                      this.context.changeCurrency(currency.label);
                      this.props.onClick();
                    }}
                  >
                    {currency.symbol} {currency.label}
                  </CurrencyTab>
                );
              })}
            </CurrencyTabContainer>
          );
        }}
      </Query>
    );
  }
}

export default CurrencySwitchTab;
