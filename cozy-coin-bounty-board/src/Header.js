import logo from './logo.svg';
import yo_down_logo from './resources/UltimateYoDownLogo.png'
import './resources/Silkscreen-Regular.ttf'
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="App-logo" ><img src={yo_down_logo} className="App-logo"  alt="logo" /></div>
      <div className='Header-title'>
        <h1 className='Header-title'>
          COZY COIN
        </h1>
        <h1 className='Header-title'>
          BINGO BOARD
        </h1>
      </div>
      <div className="Image-offset"></div>
    </div>
  );
}

export default Header;
