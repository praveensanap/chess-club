import React , {Component} from 'react';
import {Card ,CardContent} from 'material-ui';
import _ from 'lodash'
import Grid from 'material-ui/Grid'
import {connect} from 'react-redux';
import * as actions from '../actions/index'

class ChessMoves extends Component {

    yellow = {
        background:'yellow'
    }

    constructor(){
        super();
        this.renderMove = this.renderMove.bind(this);
    }

    jumpToMove(position){
        this.props.jumpToMove(position);
    }

    loadStyle(position){
        if(position === this.props.currentPosition){
            return this.yellow;
        }
        return null
    }

    renderMove(){
        let moves = this.props.moves;
        if(moves===null || moves.length===0){
            return <div></div>
        }

        let modifiedMoves = []
        _.range(1,moves.length,2).forEach(i=>{
            modifiedMoves.push({
                move: i/2 + 0.5,
                w: moves[i].move,
                b: i+1<moves.length?moves[i+1].move:""
            })
        });
        return modifiedMoves.map(move=>(
            <div  key={move.move}>
                <Grid container start="xs">
                    <Grid item md={4}>{move.move}.</Grid>
                    <Grid style={this.loadStyle(move.move*2-1)}
                          onClick={()=>this.jumpToMove(move.move*2-1)}
                          item md={4}>
                        {move.w}
                    </Grid>
                    <Grid style={this.loadStyle(move.move*2)}
                          onClick={()=>this.jumpToMove(move.move*2)}
                          item md={4}>
                        {move.b}
                    </Grid>
                </Grid>
            </div>
        ))
    }

    render(){
        return(
            <Card >
                <CardContent>
                {this.renderMove()}
                </CardContent>
            </Card>
        )
    }

}

export default connect(null,actions)(ChessMoves)