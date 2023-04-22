import React from 'react'
import './Box.css'

export const Box = ({ value, onClick }) => {
    const style = value === "T" ? "box t" : "box o";

    return (
    <button className = {style} onClick={onClick}>{value}</button>
  )
}


