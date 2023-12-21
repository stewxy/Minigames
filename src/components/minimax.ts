import React from 'react'

let scores = {
    X: 1,
    O: -1,
    tie: 0
};
export function minimax(squares:any, depth:number) {
    let bestScore = Number.NEGATIVE_INFINITY;
    let bestMove;
    //return ("# " + value + " #");
    for(let i=0; i<9; i++){
        console.log("")
        if(squares[i] == null){
            console.log();
            let score = minimax(squares, depth+=1);
            // if(score > bestScore){
            //     bestScore = score;
            //     bestMove = i;
            // }
            bestScore = Math.max(score, bestScore);
            
        }
    }
    console.log(bestScore);
    return bestScore;
}
