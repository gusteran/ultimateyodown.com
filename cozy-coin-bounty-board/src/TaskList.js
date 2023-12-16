import React from "react";
import Cookies from "js-cookie";
import FreeSeal from "./FreeSeal";
import BingoSquare from "./Square";

class TaskList extends React.Component {
  constructor() {
    super();
    this.random_order = Cookies.get(cookie_name);
    if (this.random_order == undefined) {
      this.random_order = this.shuffleArray(orgininal_list);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  createBingoBoard() {
    const gridSize = 5;
    const half = 2;
    const board = [];

    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        if (i === half && j === half) {
          //middle case
          row.push(<FreeSeal />);
        } else {
          const text = this.random_order[i * gridSize + j];
          row.push(
            <BingoSquare
              key={`${i}-${j}`}
              text={this.capitalizeFirstLetter(text)}
            />
          );
        }
      }
      board.push(row);
    }

    return board;
  }

  render() {
    const bingoBoard = this.createBingoBoard();

    return (
      <div className="Bingo">
        {bingoBoard.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="Row">
            {row.map((cell, cellIndex) => (
              <div key={`cell-${rowIndex}-${cellIndex}`} className="BingoCell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const cookie_name = "cozy-coin-bingo-board";

const orgininal_list = [
  "Draw a picture of a random celebrity and take a picture of it",
  "Go grab a snack, take a bite and send a picture into the discord",
  "Record yourself doing your best dance move",
  "Record yourself doing 10 push ups",
  "Call your teammates cute in game chat",
  "Call the enemy team cute in game chat",
  "Take a selfie mid-game showing the game behind you",
  "Talk in an accent for the duration of the round",
  "Record a quick video promoting the ultimate Yo Down",
  "Write down your favorite recipe",
  "Sing the chorus of your favorite song",
  "Post a picture of your favorite object in your room",
  "Take a photo of something festive",
  "Win a round without moving",
  "Speak in another language for one round",
  'Hit someone with a "5 minutes to get rid of it" after they say "what"',

  // Lethal company: ",
  "Make sure everyone survives",
  "Make quota",
  "Have everyone on your crew bring back at least one item",
  "Die to a turret",
  "See the monster up-close and not die",
  "Roll a dice to see what moon you go to",
  "Flash lights cannot be your first purchase",

  // Uno challenges:
  "Only can use Blue cards",
  "Only can use Red cards",
  "Only can use Green cards",
  "Only can use Yellow cards",
  "Can only use odd number cards",
  "Can only use even number cards",
  "Call Uno 3 times in a row",
  "Win with a plus 4",
  "Win with a plus 2",
  "Play 2 reverses back to back",

  // Cs2 challenges:
  "Melee only for one round",
  "Only able to move backwards for one round",
  "Only one person can leave spawn at a time, once that one player dies the next may go",
  "CT must wait in spawn until bomb is planted then they may go",
  "T must circle around the player holding the bomb like secret service for the president",
  "Everyone buy your least favorite gun and give it to your friend",
  "Everyone cannot stop moving, must be moving forward at all time",
  "Blind your teammates and make it look like an accident",
];

export default TaskList;
