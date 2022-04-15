import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../constants';

export const ProductsListContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding-bottom: 2%;

  background-color: ${ALL_COLORS.white};
`;
export const CategoryName = styled.p`
  font-size: 2em;
  width: 30%;
  height: 10%;
`;
export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;
