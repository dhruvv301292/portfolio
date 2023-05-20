import { Button, Container, Row } from "react-bootstrap";
import Board from "./Board";
import { useEffect, useState, createContext, useRef } from 'react';

export const GameContext = createContext()

function TicTacToe() {
  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]])
  const turn = useRef(true)
  const showWinnerRef = useRef(false)

  function resetGame() {
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]])
    showWinnerRef.current.style.display = 'none'
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
      showWinnerRef.current.style.display = 'block';
    }
  }, [board])

  return (
    <GameContext.Provider value={{boardContext: [board, setBoard], turn: turn}}>
      <section className="tictactoeContainer">
          <Container>
              <Row className="divAnimLeftFadeIn">
                  <h1>That's a <div style={{display: 'inline', color: '#C41230'}}>404!</div></h1>
                  <p>You've navigated to a page that doesn't exist. 
                      While you're here, why not indulge yourself in a game of tic-tac-toe (with yourself as the opponent because you're your biggest competition)
                  </p>
              </Row>
              <Row style={{marginTop: "2%"}}>
                  <Board turn={turn} setBoard={setBoard} board={board}></Board>                
                  <Button style={{position: 'absolute', top: '40%', right: '23%', width: '10%', border: 'solid', borderColor: 'white', borderWidth: '1px', backgroundColor: '#121212', animation: 'connectAnim 1s ease 0s 1 normal forwards', zIndex: '20'}} onClick={resetGame}>Clear Board</Button>
                  <span ref={showWinnerRef} className="winner">NOICE</span>
              </Row>            
          </Container>
      </section>
    </GameContext.Provider>
  );
}

export default TicTacToe;
