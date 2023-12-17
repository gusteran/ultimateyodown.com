import "./Bingo.css";
import React from "react";

class ShuffleBoard extends React.Component {
  render() {
    return (
      <div className="Header">
        <button className="Shuffle" onClick={this.props.generateNewBoard}>
          New Board
        </button>
      </div>
    );
  }
}

export default ShuffleBoard;
