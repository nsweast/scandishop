import { Component } from 'react';
import {
  ProductInListContainer,
  ProductInListDescription,
  ProductInListPhoto,
  ProductLink,
  ProductOutOfStock,
} from './ProductInList.styles';
import AddToCartFromList from './AddToCartListButton/AddToCartFromList';
import { CartContext } from '../../../context/CartContext';
import { useParams } from 'react-router-dom';
import { checkInCart } from '../../../helpers';
import Price from '../../common/Price';
import { StyledLink } from '../../Header/Header.styles';

class ProductInList extends Component {
  static contextType = CartContext;

  render() {
    const { id, brand, gallery, inStock, name, prices } = this.props.product;

    return (
      <ProductInListContainer available={inStock}>
        <ProductLink to={`/products/${this.props.params.category}/${id}`}>
          <ProductInListPhoto src={gallery[0]} />
          <ProductInListDescription>
            {brand} {name}
            <strong>
              <Price prices={prices} />
            </strong>
            <AddToCartFromList
              product={this.props.product}
              onClick={this.context.addProductToCart}
              inCart={!inStock || checkInCart(this.context.products, id)}
            />
          </ProductInListDescription>

          {!inStock && <ProductOutOfStock>OUT OF STOCK</ProductOutOfStock>}
        </ProductLink>
      </ProductInListContainer>
    );
  }
}

export default (props) => <ProductInList {...props} params={useParams()} />;
