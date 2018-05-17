import React, { Component } from "react";
import MdPlayArrow from "react-icons/lib/md/play-arrow";

import Skeleton from "../../components/Skeleton";

class DashBoard extends Component {
  render() {
    return (
      <Skeleton title={"Dashboard"}>
        <button className="btn pmd-btn-fab pmd-ripple-effect btn-primary" type="button">
          <MdPlayArrow /></button>
      </Skeleton>
    );
  }
}

export default DashBoard;
