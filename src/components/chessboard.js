import React, { Component } from 'react'
import _ from 'lodash'
import * as Chess from 'chess.js'
import ChessSquare from './chessquare'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Card , {CardContent } from 'material-ui/Card'


class ChessBoard extends Component {
    board;
    constructor(){
        super();
        this.move = this.move.bind(this);
        this.getPiece = this.getPiece.bind(this);

    }

    makeBoard(fen){
        let chess = new Chess(fen);
        let board = {};
        _.range(1,9).forEach( file => {
            "abcdefgh".split("").forEach(rank => {
                const p = chess.get(rank + file)
                if (p) {
                    board[rank + file] = p.color + p.type;
                }
            })
        });
        return board;
    }

    move(move){
        let {currentPosition , history} = this.props;
        //Move only if its the lastPosition
        if(currentPosition === history.length-1) {
            const result = this.chess.move(move);
            if (result !== null) {
                const fen = this.chess.fen()
                this.props.makeMove(fen, result.san)
            }
        }
    }

    renderRank(board){
        let ranks = _.range(8,0,-1);
        if(this.props.playingBlack){
            _.reverse(ranks)
        }
        const divStyle={
            height: '45px'
        }
        return ranks
            .map( rank=>
                <div key={rank} style={divStyle}>
                    {this.renderBoard(rank ,board)}
                </div>

            )
    }

    getPiece(square , board){
        if(board) {
            const p = board[square];
            return p;
        }
        return null;
    }

    renderBoard(rank , board){


        let files = "abcdefgh".split("")
        if(this.props.playing){
            _.reverse(files)
        }
        return files
            .map(file =>
                <ChessSquare
                    move={this.move}
                    piece={this.getPiece(file+rank, board)}
                    key={file+rank}
                    file={file}
                    rank={rank}
                />

        )
    }

    render(){
        let {currentPosition , history} = this.props;
        let currentMove = history[currentPosition]

        if(!currentMove){
            return <span>error</span>
        }
        let board = this.makeBoard(currentMove.fen)
        const style = {
            padding: '0px'
        };
        this.chess = new Chess(this.props.fen);
        return (
            <Card style={style}>
                <CardContent style={style}>
                    {this.renderRank(board)}
                </CardContent>
            </Card>
        )
    }
}

export default DragDropContext(HTML5Backend)(ChessBoard)