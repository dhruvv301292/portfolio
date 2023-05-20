import { useContext } from 'react'
import { GameContext } from './TicTacToe.js'

export default function Box(props) {

    const { boardContext, turn } = useContext(GameContext);
    const [board, setBoard] = boardContext;
  
    function handleButtonClick() {    
      setBoard((board) => {
        const newBoard = [...board];
        newBoard[props.row][props.col] = turn.current ? "X" : "O"      
        return newBoard
      })     
         
    }  
  
    return (
        <>
        <button onClick={handleButtonClick} className={"box box-" + props.row + "-" + props.col}>{board[props.row][props.col]}</button>
        </>
    )
}
