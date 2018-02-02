import React , { Component } from 'react';
import Countdown from 'react-countdown-now';

import {Card , Typography} from 'material-ui';

class ChessClock extends Component {
    renderTimer(props){
        const style =  {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        };

        const cardStyle = {
            margin: '10px',
            display:'flex',
            flex:1
        }

        const typeStyle = {
            display:'flex',
            flex:1
        }

        const bull = <span style={style}>•</span>;
        return(
            <div>
                <Card style={cardStyle}>
                    <Typography style={typeStyle} type="headline" component="p">
                        {props.minutes} {bull} {props.seconds}
                    </Typography>
                </Card>
                <Card style={cardStyle}>
                    <Typography style={typeStyle} type="headline" component="p">
                        {props.minutes} {bull} {props.seconds}
                    </Typography>
                </Card>
            </div>
        )
    }

    render() {
        let endTime = Date.now() + 5*60*60*1000;
        return <Countdown date={endTime} renderer={this.renderTimer}/>
    }
}

export default ChessClock;