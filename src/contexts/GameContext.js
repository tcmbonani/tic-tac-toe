import { createContext,useState} from "react";

export const GameContext = createContext({})


export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board: [null, null, null, null, null, null, null, null, null],
        player1: {
            choice: "x",
            name: "Tshepiso",
            score: 0
        },
        player2: {
            choice: "o",
            name: "Ayanda",
            score: 0
        },
        turn: "x",
        roundWinner: ""
    })


    const updateBoard = (index) => {
        const updatedBoard = game.board;
        updatedBoard[index] = game.turn
        setGame({
            ...game,
            board: updatedBoard,
            turn: game.turn === "x" ? "o" : "x"
        })
    }

    const resetBoard = () => {
        setGame({
    ...game,
    board: [null, null, null, null, null, null, null, null, null],
    turn: "x",
        })
    }
    const toggleChoice = (choice) => (choice === "x" ? "o" : "x");
    
    const switchTurn = () => {
        setGame((prevGame) => ({
          ...prevGame,
          player1: {
            ...prevGame.player1,
            choice: toggleChoice(prevGame.player1.choice),
          },
          player2: {
            ...prevGame.player2,
            choice: toggleChoice(prevGame.player2.choice),
          },
          turn: prevGame.turn === "x" ? "o" : "x",
        }));
      };
    const updateScore = (winner) => {
            setGame(prevGame => ({
                ...prevGame,
                [winner]: {
                    ...prevGame[winner],
                    score: prevGame[winner].score + 1,
                },
                roundWinner: prevGame[winner]
            }))
    }
    const roundComplete = (result) => {
        if(game.turn === game.player1.choice && result !== "draw") {
            updateScore("player1")
        } else if(game.turn === game.player2.choice && result !== "draw") {
        updateScore("player2")
    }else {
        console.log("DRAW")
    }
    switchTurn();
}

    return (
        <GameContext.Provider value={{
            game,
            updateBoard,
            resetBoard,
            roundComplete
            }}>

            {props.children}

        </GameContext.Provider>
    )
     
}