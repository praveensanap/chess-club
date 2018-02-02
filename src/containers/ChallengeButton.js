import React , { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../actions/index'
import { Button } from 'material-ui';
class ChallengeButton extends Component{

    challenge(opponent){
        this.props.challenge(opponent);
    }
    render(){

        let {opponent} = this.props;
        return (
            <Button onClick={()=>this.challenge(opponent)} dense color="primary">
                Play
            </Button>
        )
    }

}

function mapStateToProps({user}){
    return {user};
}

export default connect(mapStateToProps,actions)(ChallengeButton);