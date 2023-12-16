import "./Bingo.css";
import React from "react";

class BingoSquare extends React.Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { text } = this.props;
    return (
      <div className="Box" onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <div className="Dot">
            <span className="Selected-Text">{text}</span>
          </div>
        ) : (
          <div className="Unclicked">
            <span className="Unselected-Text">{"Done!"}</span>
          </div>
        )}
      </div>
    );
  }
}

export default BingoSquare;
