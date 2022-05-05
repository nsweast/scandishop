import { gql } from '@apollo/client';

export const CategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;
export const ProductsListQuery = gql`
  query ProductsByCategory($category: String!) {
    category(input: { title: $category }) {
      products {
        brand
        gallery
        inStock
        name
        id
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
      }
    }
  }
`;

export const ProductQuery = gql`
  query ProductById($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      brand
      attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
    }
  }
`;

export const CurrenciesQuery = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
