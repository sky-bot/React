import React from 'react'
import { Link } from 'react-router-dom'
import { Storage } from './../storage/storage'
import { Box } from './board-box'

import * as utils from '../utils/functions'

export class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boxes : Array(9).fill(null),
            history : [],
            xIsNext : true
        } 
    }

    storage = new Storage()

    handelBoxClick(index){
        const boxes = this.state.boxes.slice()
        let history = this.state.history
    
        if (utils.findWinner(boxes) || boxes[index]){
            return
        }

        if(utils.areAllBoxesClicked(boxes)===true){
            return
        }

        boxes[index] = this.state.xIsNext ? 'x' : 'o'

        history.push(this.state.xIsNext ? 'x' : 'o')

        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })

    }

    handelBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true 
        })
    }

    render () {
        const winner = utils.findWinner(this.state.boxes)
        const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        let status

        if (winner){
            status = `The winner is: ${winner}!!!`
            this.storage.update([`${winner} won !!!`])
        }else if(!winner && isFilled){
            status = 'Game Drawn'
            this.storage.update(['Game Drawn'])
        }else{
            status = `It is ${( this.state.xIsNext ? 'x' : 'o' )}'s turn.`
        }

        return (
            <div>
                <Link to="/" className = "board-link">Go back to scoreboard</Link>
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>
                        <div className="board-row">
                            <Box value = {this.state.boxes[0]} onClick={() => this.handelBoxClick(0)}/>
                            <Box value = {this.state.boxes[1]} onClick={() => this.handelBoxClick(1)}/>
                            <Box value = {this.state.boxes[2]} onClick={() => this.handelBoxClick(2)}/>
                        </div>
                        <div className="board-row">
                            <Box value = {this.state.boxes[3]} onClick={() => this.handelBoxClick(3)}/>
                            <Box value = {this.state.boxes[4]} onClick={() => this.handelBoxClick(4)}/>
                            <Box value = {this.state.boxes[5]} onClick={() => this.handelBoxClick(5)}/>
                        </div>
                        <div className="board-row">
                            <Box value = {this.state.boxes[6]} onClick={() => this.handelBoxClick(6)}/>
                            <Box value = {this.state.boxes[7]} onClick={() => this.handelBoxClick(7)}/>
                            <Box value = {this.state.boxes[8]} onClick={() => this.handelBoxClick(8)}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}