import Header from "./Header.js";
import Bingo from "./Bingo.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Bingo />
    </div>
  );
  //Footer is in TaskList.js's render()
  //im not too happy about it but im not sure how to get it here
}

export default App;
