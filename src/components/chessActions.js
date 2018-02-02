import React , {Component} from 'react'
import {IconButton} from 'material-ui'

import ImportExport from 'material-ui-icons/ImportExport';
import NoteAdd from 'material-ui-icons/NoteAdd';
import SkipPrevious from 'material-ui-icons/SkipPrevious';
import SkipNext from 'material-ui-icons/SkipNext';
import Undo from 'material-ui-icons/Undo';
import Redo from 'material-ui-icons/Redo';
import Grid from 'material-ui/Grid';
import * as actions from  '../actions/index'
import {connect} from 'react-redux';
class ChessActions extends Component {

    constructor(){
        super();
        this.newGame = this.newGame.bind(this);
        this.flip = this.flip.bind(this);
        this.previousMove = this.previousMove.bind(this);
        this.nextMove = this.nextMove.bind(this);
        this.startOfGame = this.startOfGame.bind(this);
        this.endOfGame = this.endOfGame.bind(this);
    }
    
    newGame(){
        this.props.startGame();
    }

    flip(){
        this.props.flip();
    }

    nextMove(){
        this.props.nextMove();
    }

    previousMove(){
        this.props.previousMove();
    }

    startOfGame(){
        this.props.startOfGame();
    }

    endOfGame(){
        this.props.endOfGame();
    }

    render(){
        return(
            <Grid container direction="row">
                <Grid item>
                    <IconButton onClick={this.flip} >
                        <ImportExport />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.newGame} >
                        <NoteAdd />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.startOfGame}>
                        <SkipPrevious />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.previousMove}>
                        <Undo/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.nextMove}>
                        <Redo/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton onClick={this.endOfGame}>
                        <SkipNext/>
                    </IconButton>
                </Grid>
            </Grid>
        )
    }

}

export default connect(null,actions)(ChessActions);