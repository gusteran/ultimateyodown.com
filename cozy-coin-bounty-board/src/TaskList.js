import React from 'react';
import Cookies from 'js-cookie';

class TaskList extends React.Component {
    constructor() {
        this.random_order = Cookies.get(cookie_name);
        if (this.random_order == undefined) {
            this.random_order = this.shuffleArray(orgininal_list)

        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    createBingoBoard() {
        //todo put seal in the middle or [2,2]
        const gridSize = 5;
        const board = [];
        let counter = 0;
    
        for (let i = 0; i < gridSize; i++) {
          const row = [];
          for (let j = 0; j < gridSize; j++) {
            if(i == 2 && j == 2 ){
                //middle case
                row.push(<div className="Box"><img src={free_seal} className="Free-Seal" alt="free" /></div>)
            }
            const text = this.random_order[counter++];
            row.push(<BingoSquare key={`${i}-${j}`} text={text} />);
          }
          board.push(row);
        }
    
        return board;
      }
}




const cookie_name = 'cozy-coin-bingo-board';

const orgininal_list = [
    'Draw a picture of a random celebrity and take a picture of it',
'Go grab a snack, take a bite and send a picture into the discord',
'Record yourself doing your best dance move',
'Record yourself doing 10 push ups',
'Call your teammates cute in game chat',
'Call the enemy team cute in game chat',
'Take a selfie mid-game showing the game behind you',
'Talk in an accent for the duration of the round',
'Record a quick video promoting the ultimate Yo Down',
'Write down your favorite recipe',
'Sing the chorus of your favorite song',
'Post a picture of your favorite object in your room',
'Take a photo of something festive',
'Win a round without moving',
'Speak in another language for one round',
'Hit someone with a "5 minutes to get rid of it" after they say "what"',

// Lethal company: ",
'Make sure everyone survives',
'Make quota',
'Have everyone on your crew bring back at least one item',
'Die to a turret',
'See the monster up-close and not die',
'roll a dice to see what moon you go to',
'flash lights cannot be your first purchase',
 
// Uno challenges: 
'Only can use Blue cards',
'Only can use Red cards',
'Only can use Green cards',
'Only can use Yellow cards',
'Can only use odd number cards',
'Can only use even number cards',
'Call Uno 3 times in a row',
'win with a plus 4',
'win with a plus 2',
'play 2 reverses back to back',

// Cs2 challenges:
'melee only for one round',
'only able to move backwards for one round',
'only one person can leave spawn at a time, once that one player dies the next may go',
'CT must wait in spawn until bomb is planted then they may go',
'T must circle around the player holding the bomb like secret service for the president',
'everyone buy your least favorite gun and give it to your friend',
'everyone cannot stop moving, must be moving forward at all time',
'blind your teammates and make it look like an accident'];