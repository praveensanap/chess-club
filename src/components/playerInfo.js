import React , {Component} from 'react';

import {Card} from 'material-ui'
import Typography from 'material-ui/Typography'

class PlayerInfo extends Component {

    render(){

        let { playerInfo } = this.props;

        let name = ""
        let rating = ""

        if(playerInfo) {
            name = playerInfo.name;
            rating = playerInfo.beforeRating;
        }
        return(
            <Card>
                <Typography type="title">
                    { name }
                </Typography>
                <Typography >
                    { rating }
                </Typography>
            </Card>
        )

    }


}

export default PlayerInfo;