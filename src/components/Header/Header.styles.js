import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ALL_COLORS } from '../../constants';

export const HeaderSection = styled.div`
  width: 100%;
  position: relative;

  z-index: 1;
`;

export const HeaderContainer = styled.div`
  position: relative;
  height: 60px;
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${ALL_COLORS.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CategoriesContainer = styled.div`
  width: 33%;

  display: flex;
  align-items: center;

  grid-gap: 10%;
`;
export const LogoContainer = styled.div`
  width: 33%;
  display: flex;

  align-items: center;
  justify-content: center;
`;
export const ActionsContainer = styled.div`
  position: relative;

  width: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
`;
export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
