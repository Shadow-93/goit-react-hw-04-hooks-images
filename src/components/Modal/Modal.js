import React from "react";
import PropTypes from "prop-types";

function Modal({ onCloseItem, largeImageURL }) {
  window.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      onCloseItem(handleKeyDown);
    }
  }

  function backdropClose(e) {
    if (e.currentTarget === e.target) {
      onCloseItem(handleKeyDown);
    }
  }

  return (
    <div className="Overlay" onClick={backdropClose}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />;
      </div>
    </div>
  );
}

Modal.propTypes = {
  onCloseItem: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
