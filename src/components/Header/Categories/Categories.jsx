import { Component } from 'react';
import { CategoryButton, CategoryButtonSelected } from './Categories.styles';
import { Query } from '@apollo/client/react/components';
import { StyledLink } from '../Header.styles';
import { useParams } from 'react-router-dom';
import { CategoriesQuery } from '../../../queries';

class Categories extends Component {
  state = {
    selectedCategory: this.props.params.category,
  };

  changeCategory = (selected) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedCategory: selected,
      };
    });
  };

  render() {
    const { selectedCategory } = this.state;

    return (
      <Query query={CategoriesQuery}>
        {(result) => {
          if (result.loading) {
            return null;
          }

          return result.data.categories.map((category) => {
            if (selectedCategory === category.name) {
              return (
                <StyledLink
                  to={`/products/${category.name}`}
                  key={category.name}
                >
                  <CategoryButtonSelected>
                    {category.name.toUpperCase()}
                  </CategoryButtonSelected>
                </StyledLink>
              );
            }
            return (
              <StyledLink to={`/products/${category.name}`} key={category.name}>
                <CategoryButton
                  onClick={() => {
                    this.changeCategory(category.name);
                  }}
                >
                  {category.name.toUpperCase()}
                </CategoryButton>
              </StyledLink>
            );
          });
        }}
      </Query>
    );
  }
}

export default (props) => <Categories {...props} params={useParams()} />;
