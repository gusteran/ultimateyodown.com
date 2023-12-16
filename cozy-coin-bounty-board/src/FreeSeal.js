import React from "react";
import free_seal from "./resources/seal2.png";

class FreeSeal extends React.Component {
  render() {
    return (
      <div className="Free-Seal">
        <img src={free_seal} className="Box" alt="free" />
      </div>
    );
  }
}

export default FreeSeal;
