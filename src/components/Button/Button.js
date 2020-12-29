import React from "react";
import PropTypes from "prop-types";

function Button({ onClickBtn }) {
  return (
    <button className="Button" type="button" onClick={onClickBtn}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
