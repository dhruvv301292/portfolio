import { Button, Container, Row } from "react-bootstrap";
import Board from "./Board";
import { useEffect, useState, createContext, useRef } from 'react';

export const GameContext = createContext()

function TicTacToe() {
  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
  const turn = useRef(true)
  // const result = useRef("Player X's turn")

  function resetGame() {
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
  }    

  useEffect(() => {
    turn.current = !turn.current;
    const checkWinner = () => {
      return checkCols() || checkRows() || checkDiagonals()
    }
  
    function checkCols() {
      for (var i = 0; i<3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          if (board[0][i] === "X" || board[0][0] === "O") {
            return true
          }
        }
      }
      return false
    }
  
    function checkRows() {
      for (var i = 0; i<3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          if (board[i][0] === "X" || board[0][0] === "O") {
            return true
          }
        }
      }
      return false
    }
  
    function checkDiagonals() {
  
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        if (board[1][1] === "X" || board[1][1] === "O") {
          return true
        }
      }
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        if (board[1][1] === "X" || board[1][1] === "O") {
          return true
        }
      }
      return false;
    }

    if(checkWinner()) {      
      console.log("WINNER")
    }
  }, [board])

  return (
    <GameContext.Provider value={{boardContext: [board, setBoard], turn: turn}}>
    <section className="tictactoeContainer">
        <Container>
            <Row className="divAnimLeftFadeIn">
                <h1>That's a <h1 style={{display: 'inline', color: '#C41230'}}>404!</h1></h1>
                <p>You've navigated to a page that doesn't exist. 
                    While you're here, why not indulge yourself in a game of tic-tac-toe (with yourself as the opponent because you're your biggest competition)
                </p>
            </Row>
            <Row style={{marginTop: "2%"}}>
                <Board turn={turn} setBoard={setBoard} board={board}></Board>                
            </Row>
            <div>
            <Button className='clearBoard' onClick={resetGame}>Clear Board</Button>
            </div>
        </Container>
    </section>
    </GameContext.Provider>
  );
}

export default TicTacToe;
