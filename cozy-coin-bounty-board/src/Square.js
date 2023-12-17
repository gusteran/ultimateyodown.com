import "./Bingo.css";
import React from "react";

class BingoSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: !props.isSelected };
  }

  componentDidUpdate(prevProps) {
    //was last update selected or not?
    if (prevProps.isSelected !== this.props.isSelected) {
      this.setState({ isToggleOn: !this.props.isSelected });
    }
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({ isToggleOn: !prevState.isToggleOn }),
      () => this.props.onToggle(this.props.index)
    );
  };

  render() {
    const { text } = this.props;
    const { isToggleOn } = this.state;

    //render based on selection cookie status
    return (
      <div className="Box" onClick={this.handleClick}>
        {isToggleOn ? (
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
