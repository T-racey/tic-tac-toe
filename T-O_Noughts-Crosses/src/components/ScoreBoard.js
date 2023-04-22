import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, tPlaying}) => {
    const {tScore, oScore} = scores;
  return (
    <div className="scoreboard">
    <span className={`score t-score ${!tPlaying && "inactive"}`}>T - {tScore}</span>  
    <span className={`score o-score ${tPlaying && "inactive"}`}>O - {oScore}</span>
    
    </ div>
     )
}


