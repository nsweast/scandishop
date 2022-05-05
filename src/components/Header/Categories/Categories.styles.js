import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../constants';

export const CategoryButton = styled.div`
  align-self: center;
  justify-self: center;
  padding-bottom: 10px;
  color: ${ALL_COLORS.textBlack};

  cursor: pointer;
`;
export const CategoryButtonSelected = styled(CategoryButton)`
  color: ${ALL_COLORS.green};
  border-bottom: 2px ${ALL_COLORS.green} solid;
`;
