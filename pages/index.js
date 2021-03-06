import React, { Component } from 'react'
import App from "../components/App";

export default class Home extends Component {
  // Add some delay
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    return {};
  }

  render() {
    return (
      <App title="Home">
        <div className="column">Home</div>
      </App>
    );
  }
}