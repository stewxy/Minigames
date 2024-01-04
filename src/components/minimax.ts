import React from 'react'

//PLAYER WANTS TO CHOOSE MAXIMISING SCORE (+10)
//AI WANTS TO CHOOSE MINIMISING SCORE (-10)
//0 FOR DRAW

let scores = {
    X: 1,
    O: -1,
    tie: 0
};

const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
function checkWinner(squares:any){
    for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return (squares[a])
        }
    }
    //console.log(squares);
    if(squares.every((e: any) => e !== "")){
        return "tie";
    }
    return null;
}

let temp = 0;

export function minimax(squares:any, depth:number, isMaximising: boolean){
    console.log(squares);
    let bestScore = Number.NEGATIVE_INFINITY;
    let bestMove = -1;
    for(let i=0; i<9; i++){
        if(squares[i] == ""){
            squares[i] = "O"
            let score = algorithm(squares, 0, false);
            //console.log(score + " score");
            squares[i] = "";
            if(score > bestScore){
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

function algorithm(squares:any, depth:number, isMaximising: boolean) {
    // temp+=1
    // console.log(temp);
    let result = checkWinner(squares);
    if(result !== ""){
        if(result == "O"){
            return(1);
        }
        else if(result == "X"){
            return(-1);
        }
        else if(result == "tie"){
            return(0);
        }
    }
    
    //AI (O, MAXIMISER)
    if (isMaximising){
        let bestScore = Number.NEGATIVE_INFINITY;
        for(let i=0; i<9; i++){
            if(squares[i] == ""){
                squares[i] = "O"
                // let score = algorithm(squares, depth+=1, false);
                // bestScore = Math.max(score, bestScore);
                bestScore = Math.max(bestScore, algorithm(squares, depth+=1, true));
                squares[i] = "";
            }
        }
        return bestScore;
    //PLAYER (X, MINIMISER)
    } else {
        let bestScore = Number.POSITIVE_INFINITY;
        for(let i=0; i<9; i++){
            if(squares[i] == ""){
                squares[i] = "X" 
                // let score = algorithm(squares, depth+=1, true);
                // bestScore = Math.min(score, bestScore);
                bestScore = Math.min(bestScore, algorithm(squares, depth+=1, false));
                squares[i] = "";
            }
        }
        return bestScore;
    }
}
