import './Bingo.css';
import free_seal from './resources/seal2.png'
import BingoSquare from './Square';
import React from 'react';

class Bingo extends React.Component {

  

  
  render() {
    return (
      <div className="Bingo">
        <div className='Row'>
          <BingoSquare></BingoSquare>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
        </div>
        <div className='Row'>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
        </div>
        <div className='Row'>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"><img src={free_seal} className="Free-Seal" alt="free" /></div>
          <div className="Box"></div>
          <div className="Box"></div>
        </div>
        <div className='Row'>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
        </div>
        <div className='Row'>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
          <div className="Box"></div>
        </div>
      </div>
    );
  }
}

export default Bingo;
