import React, { Component } from 'react'
import { Card , CardMedia  ,CardContent ,CardActions ,Button} from "material-ui";
import Typography from 'material-ui/Typography';
import ChallengeButton from '../containers/ChallengeButton';
import {connect } from 'react-redux';
import * as actions from '../actions/index'

class Member extends Component {


    render(){

        let {member}  = this.props;

        return (
            <Card >
                <CardMedia style={{height: 200}} image = {this.props.member.picture} />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {member.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ChallengeButton opponent={member}/>
                </CardActions>
            </Card>

        )
    }
}

export default connect(null,  actions)(Member)