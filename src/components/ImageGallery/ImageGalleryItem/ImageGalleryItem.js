import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ tags, webformatURL, imgId, onClickItem }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onClickItem(imgId)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  imgId: PropTypes.number.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
