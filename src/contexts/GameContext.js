import { createContext,useState} from "react";

export const GameContext = createContext({})

export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
        turn: "x"
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
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        })
    }

    const roundComplete = () => {
        if(game.turn === game.player1.choice) {
            console.log("PLAYER 1 wins")
            setGame({
                ...game,
                player1: {
                    ...game.player1,
                    score: game.player1.score + 1
                }
            })
        } else if(game.turn === game.player2.choice) {
        console.log("PLAYER 2 wins")
        setGame({
            ...game,
            player2: {
                ...game.player2,
                score: game.player2.score + 1
            }
        })
    }else {
        console.log("DRAW")
    }
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