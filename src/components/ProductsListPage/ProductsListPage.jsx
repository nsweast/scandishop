import { Component } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  CategoryName,
  ProductsList,
  ProductsListContainer,
} from './ProductsListPage.styles';
import LoadingMessage from '../common/Loader';
import ProductInList from './ProductInList';
import { useParams } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { ProductsListQuery } from '../../queries';

class ProductsListPage extends Component {
  static contextType = CartContext;

  render() {
    const { category } = this.props.params;

    return (
      <Query query={ProductsListQuery} variables={{ category }}>
        {(result) => {
          if (result.loading) {
            return <LoadingMessage />;
          }

          return (
            <ProductsListContainer>
              <CategoryName>{category.toUpperCase()}</CategoryName>

              <ProductsList>
                {result.data.category.products.map((product) => {
                  return <ProductInList key={product.id} product={product} />;
                })}
              </ProductsList>
            </ProductsListContainer>
          );
        }}
      </Query>
    );
  }
}

export default (props) => <ProductsListPage {...props} params={useParams()} />;
