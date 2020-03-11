import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/notfound.css";

export default class NotFound extends React.Component {
  goHome = e => {
    navigate(`/`);
  };
  render() {
    return <div className="not-found" onClick={this.goHome}></div>;
  }
}
