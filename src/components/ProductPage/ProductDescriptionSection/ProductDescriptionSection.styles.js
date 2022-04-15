import styled from 'styled-components/macro';

export const ProductDescriptionContainer = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
export const ItemTitle = styled.div`
  font-size: xx-large;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
  }
`;

export const ItemAttribute = styled.div`
  span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: large;
  }
`;
export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: large;
  }

  strong {
    font-size: x-large;
  }
`;
export const ItemDescription = styled.div`
  font-family: 'Roboto', sans-serif;
`;
