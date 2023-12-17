import yo_down_logo from "./resources/UltimateYoDownLogo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="App-logo">
        <img src={yo_down_logo} className="App-logo" alt="logo" />
      </div>
      <div className="Header-title">
        <h1 className="Header-title">COZY COIN BINGO BOARD</h1>
      </div>
      <div className="Image-offset"></div>
    </div>
  );
}

export default Header;
