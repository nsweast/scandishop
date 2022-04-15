import styled from 'styled-components/macro';
import { Component } from 'react';

const Loader = styled.div`
  width: 90%;
  margin: 0 auto;
`;

class LoadingMessage extends Component {
  render() {
    return <Loader>Wait please. We almost there</Loader>;
  }
}

export default LoadingMessage;
