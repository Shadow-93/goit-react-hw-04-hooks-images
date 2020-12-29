import React from "react";

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className="spinner">
        <Loader
          type="Oval"
          color="#00BFFF"
          height={40}
          width={40}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
