import { Component } from 'react';
import { SliderContainer } from './Slider.styles';
import { CartImage } from './Slider.styles';
import Arrow from './Arrow';

class Slider extends Component {
  state = {
    activeIndex: 0,
  };

  nextPhoto = () => {
    this.setState((prevState) => {
      return {
        activeIndex:
          prevState.activeIndex < this.props.photos.length - 1
            ? prevState.activeIndex + 1
            : 0,
      };
    });
  };
  prevPhoto = () => {
    this.setState((prevState) => {
      return {
        activeIndex:
          prevState.activeIndex > 0
            ? prevState.activeIndex - 1
            : this.props.photos.length - 1,
      };
    });
  };

  render() {
    const { photos } = this.props;
    const { activeIndex } = this.state;

    return (
      <SliderContainer>
        <CartImage src={photos[activeIndex]} />
        {photos.length > 1 && (
          <Arrow next={this.nextPhoto} prev={this.prevPhoto} />
        )}
      </SliderContainer>
    );
  }
}

export default Slider;
