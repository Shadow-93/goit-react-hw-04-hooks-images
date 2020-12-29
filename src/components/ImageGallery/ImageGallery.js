import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items, onItemClick }) => {
  return (
    <ul className="ImageGallery">
      {items.map((item) => {
        const { id, tags, webformatURL } = item;

        return (
          <ImageGalleryItem
            key={id}
            imgId={id}
            tags={tags}
            webformatURL={webformatURL}
            onClickItem={onItemClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
