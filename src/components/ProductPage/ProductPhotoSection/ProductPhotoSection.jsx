import React, { Component } from 'react';
import { MainImage, SmallImage } from '../../common/Images.styles';
import {
  ImagesContainer,
  SmallImagesContainer,
} from './ProductPhotoSection.styles';

class ProductPhotoSection extends Component {
  state = {
    previewUrl: this.props.gallery[0],
  };

  showPhoto = (url) => {
    this.setState({
      previewUrl: url,
    });
  };

  render() {
    const { gallery } = this.props;
    const { previewUrl } = this.state;

    if (gallery.length <= 1) {
      return (
        <ImagesContainer>
          <MainImage src={previewUrl} />
        </ImagesContainer>
      );
    }

    return (
      <ImagesContainer>
        <SmallImagesContainer>
          {gallery.map((url) => {
            return (
              <SmallImage
                key={url}
                src={url}
                onClick={() => this.showPhoto(url)}
                preview={previewUrl === url}
              />
            );
          })}
        </SmallImagesContainer>

        <MainImage src={previewUrl} />
      </ImagesContainer>
    );
  }
}

export default ProductPhotoSection;
