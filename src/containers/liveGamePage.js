import React , { Component } from 'react';

import LiveGame from './livegame'

class LiveGamePage extends Component{


    render(){
        let params = new URLSearchParams(this.props.location.search);

        let gameId = params.get('game');
        return(
            <LiveGame gameId={gameId}/>

        )
    }
}

export default LiveGamePage;