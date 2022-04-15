import { Component } from 'react';
import { CartContext } from '../../context/CartContext';
import PagesRoutes from '../../pages/PagesRoutes';

class MainPage extends Component {
  state = {
    products: [],
    currency: 'USD',
  };

  componentDidMount() {
    const timer = Date.now() - +localStorage.getItem('dateAdded');

    if (timer > 3600000) {
      localStorage.clear();
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        products: JSON.parse(localStorage.getItem('cart')) || [],
        currency: localStorage.getItem('currency') || 'USD',
      };
    });
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state.products));
    localStorage.setItem('currency', this.state.currency);
    localStorage.setItem('dateAdded', Date.now());
  }

  addProductToCart = (productData, attributes = []) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        products: [
          ...prevState.products,
          {
            ...productData,
            selectedAttributes: attributes,
            quantity: 1,
          },
        ],
      };
    });
  };

  changeAttributeFromCart = (id, name, value) => {
    const attribute = this.state.products
      .find((product) => product.id === id)
      .selectedAttributes.find((attribute) => name in attribute);

    if (!!attribute) {
      this.setState((prevState) => {
        return {
          ...prevState,
          products: prevState.products.map((product) => {
            return {
              ...product,
              selectedAttributes: product.selectedAttributes.map(
                (attribute) => {
                  if (name in attribute && product.id === id) {
                    return { [name]: value };
                  } else {
                    return attribute;
                  }
                }
              ),
            };
          }),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          products: prevState.products.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                selectedAttributes: [
                  ...product.selectedAttributes,
                  { [name]: value },
                ],
              };
            } else {
              return product;
            }
          }),
        };
      });
    }
  };

  quantityAdd = (passedId) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        products: prevState.products.map((item) => {
          return {
            ...item,
            quantity: passedId === item.id ? item.quantity + 1 : item.quantity,
          };
        }),
      };
    });
  };

  quantitySubtract = (passedId) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        products: prevState.products
          .map((item) => {
            return {
              ...item,
              quantity:
                passedId === item.id ? item.quantity - 1 : item.quantity,
            };
          })
          .filter((item) => item.quantity !== 0),
      };
    });
  };

  changeCurrency = (label) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currency: label,
      };
    });
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          products: this.state.products,
          addProductToCart: this.addProductToCart,
          changeAttributeFromCart: this.changeAttributeFromCart,
          add: this.quantityAdd,
          subtract: this.quantitySubtract,
          currency: this.state.currency,
          changeCurrency: this.changeCurrency,
        }}
      >
        <PagesRoutes />
      </CartContext.Provider>
    );
  }
}

export default MainPage;
