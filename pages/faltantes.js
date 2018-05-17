import React, { Component } from "react";
import App from "../components/App";

export default class Faltantes extends Component {
  // Add some delay
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    return {};
  }

  render() {
    return (
      <App title="Faltantes">
        <div className="column">Faltantes</div>
      </App>
    );
  }
}
