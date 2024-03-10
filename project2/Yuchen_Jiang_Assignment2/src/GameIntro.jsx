import React from "react"
import "./GameIntro.css"
import image1 from "./assets/xx.jpeg"

export function GameIntro() {
    const content = "AppleConway's Game of Life is a cellular automaton devised by mathematician John Conway. It's a zero-player game, meaning its evolution is determined by its initial state, requiring no further input. The game takes place on a grid of cells, where each cell can be alive or dead. Through a set of simple rules based on the number of neighboring live cells, the grid evolves from one generation to the next. Despite its simplicity, the Game of Life exhibits complex emergent behavior, making it a fascinating subject of study in mathematics and computer science. Here are some specific rules for the game:"
    let introBlcok = <div className="introBlock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content}</div>
    let headtingText = <h1>Introduction to Conway's Game of Live</h1>

    function ruleList() {
        return (
            <div>
                <ul>
                    <h3>For a space that is populated:</h3>
                    <li>Each cell with one or no neighbors dies, as if by solitude.</li>
                    <img src={image1} width={"500px"}/>
                    <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
                    <li>Each cell with two or three neighbors survives.</li>
                </ul>
                <ul>
                    <h3>For a space that is empty or unpopulated:</h3>
                    <li>Each cell with three neighbors becomes populated</li>
                </ul>
            </div>
        )
    }

    return (
        <div className="introContainer">
            {headtingText}
            {introBlcok}
            {ruleList()}
        </div>
    )
}