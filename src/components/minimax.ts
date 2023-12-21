import React from 'react'

//PLAYER WANTS TO CHOOSE MAXIMISING SCORE (+10)
//AI WANTS TO CHOOSE MINIMISING SCORE (-10)
//0 FOR DRAW

let scores = {
    X: 1,
    O: -1,
    tie: 0
};



export function minimax(squares:any, depth:number, isMaximising: boolean){
    let bestScore = Number.NEGATIVE_INFINITY;
    let bestMove;
    for(let i=0; i<9; i++){
        if(squares[i] == null){
            squares[i] = "O"
            let score = algorithm(squares, 0, true);
            squares[i] = null;
            if(score > bestScore){
                bestScore = score;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

function algorithm(squares:any, depth:number, isMaximising: boolean) {
    //PLAYER (X, MAXIMISER)
    if (isMaximising){
        let bestScore = Number.NEGATIVE_INFINITY;
        for(let i=0; i<9; i++){
            if(squares[i] == null){
                squares[i] = "X"
                let score = algorithm(squares, depth+=1, false);
                bestScore = Math.max(score, bestScore);
                squares[i] = null;
            }
        }
        return bestScore;
    //AI (O, MINIMISER)
    } else {
        let bestScore = Number.POSITIVE_INFINITY;
        for(let i=0; i<9; i++){
            if(squares[i] == null){
                squares[i] = "O"
                let score = algorithm(squares, depth+=1, true);
                bestScore = Math.min(score, bestScore);
                squares[i] = null;
            }
        }
        return bestScore;
    }
}
