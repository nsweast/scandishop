import { Component } from 'react';
import ProductPhotoSection from './ProductPhotoSection';
import ProductDescriptionSection from './ProductDescriptionSection';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ProductInfoContainer } from './ProductPage.styles';
import LoadingMessage from '../../components/common/Loader';
import { Query } from '@apollo/client/react/components';
import { ProductQuery } from '../../queries';

class ProductPage extends Component {
  static contextType = CartContext;

  render() {
    const { id } = this.props.params;

    return (
      <Query query={ProductQuery} variables={{ id }}>
        {(result) => {
          if (result.loading) {
            return (
              <ProductInfoContainer>
                <LoadingMessage />
              </ProductInfoContainer>
            );
          }
          return (
            <ProductInfoContainer>
              <ProductPhotoSection gallery={result.data.product.gallery} />
              <ProductDescriptionSection info={result.data.product} />
            </ProductInfoContainer>
          );
        }}
      </Query>
    );
  }
}

export default (props) => <ProductPage {...props} params={useParams()} />;
