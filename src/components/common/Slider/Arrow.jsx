import { Component } from 'react';
import styled from 'styled-components/macro';
import { ALL_COLORS } from '../../../constants';

const ArrowsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
`;
const ArrowRight = styled.svg`
  background-color: ${ALL_COLORS.frameShadow};
  padding: 0 4%;

  height: 100%;
  width: 7%;
`;
const ArrowLeft = styled(ArrowRight)``;

class Arrow extends Component {
  render() {
    const { next, prev } = this.props;

    return (
      <ArrowsContainer>
        <ArrowLeft
          onClick={prev}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 7L7 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowLeft>

        <ArrowRight
          onClick={next}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowRight>
      </ArrowsContainer>
    );
  }
}

export default Arrow;
