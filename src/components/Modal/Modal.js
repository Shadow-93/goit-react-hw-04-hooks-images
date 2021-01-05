import React, {useEffect} from "react";
import PropTypes from "prop-types";

function Modal({ onCloseItem, largeImageURL }) {

  useEffect( () => { 
    window.addEventListener("keydown", handleKeyDown)
    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown)
}
});
  
  const  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseItem();
    }
  }

  const backdropClose = (e) => {
    if (e.currentTarget === e.target) {
      onCloseItem();
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
