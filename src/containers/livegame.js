import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from  '../actions/index'
import ChessBoard from '../components/chessboard'
import ChessMoves from '../components/chessmoves'
import Grid from 'material-ui/Grid'
import ChessActions from "../components/chessActions";
import PlayerInfo from "../components/playerInfo"
import ChessClock from '../components/chessClock'
class LiveGame extends Component {

    componentDidMount(){
        this.props.liveGame()
    }

    constructor(props){
        super()
        this.move = this.move.bind(this);
    }


    move(fen ,move){
        let history = this.props.currentGame.history;

        let m = {
            move:move,
            fen:fen
        };

        if(history!==null){
            history.push(m)
        }else{
            history = [m]
        }
        this.props.move(fen ,history)
    }



    render(){
        const {playingBlack, fen  , turn, history, currentPosition } = this.props.currentGame;

        return (
            <Grid container direction="row" justify="center" alignItems="stretch">
                <Grid item >
                    <Grid container direction="column" alignItems="flex-end" justify="space-around">
                        <Grid item>
                            <PlayerInfo nickName="Player 1"/>
                        </Grid>
                        <Grid item>
                            <ChessClock />
                        </Grid>
                        <Grid>
                            <PlayerInfo nickName="Player 2"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container direction="column" alignItems="center">
                        <Grid item >
                            <ChessBoard
                                playingBlack={playingBlack}
                                fen={fen}
                                currentPosition={currentPosition}
                                turn={turn}
                                history={history}
                                makeMove={this.move}
                            />
                        </Grid>
                        <Grid item>
                            <ChessActions actions={{}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ChessMoves
                        currentPosition={currentPosition}
                        moves={history}/>
                </Grid>
            </Grid>
        )
    }
}

function  mapStateToProps({currentGame}){
    return {currentGame}
}

export default connect(mapStateToProps , actions)(LiveGame)