import './Bingo.css';
import free_seal from './resources/seal2.png'
// import selected_square from './resources/circle1.png'
import Bingo from './Bingo';
import React from 'react';

class BingoSquare extends React.Component {

    constructor() {
        super();
    this.state = {isToggleOn: true};
        this.text = "placeholder";
        
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

    render() {
        return (
            <div className="Box" onClick={this.handleClick}>
                {this.state.isToggleOn ? 
                    <div className='Dot'><span className='Selected-Text'>{this.text}</span></div> :
                    <div className='Unlicked'><span className='Unselected-Text'>{this.text}</span></div>}
            </div>
        );
    }
}

export default BingoSquare;