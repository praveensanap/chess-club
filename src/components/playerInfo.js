import React , {Component} from 'react';

import {Card} from 'material-ui'
import Typography from 'material-ui/Typography'

class PlayerInfo extends Component {

    render(){

        let { nickName } = this.props;

        return(
            <Card>
                <Typography type="title">
                    { nickName }
                </Typography>
                <Typography >
                    1200
                </Typography>
            </Card>
        )

    }


}

export default PlayerInfo;