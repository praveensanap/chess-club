import React, { Component } from 'react'
import { Card , CardMedia  ,CardContent ,CardActions ,Button} from "material-ui";
import Typography from 'material-ui/Typography'
import {connect } from 'react-redux'
import * as actions from '../actions/index'

class UnapprovedMember extends Component {

    constructor(props){
        super(props)
        this.approve = this.approve.bind(this);
    }

    approve(){
        let {member} = this.props;
        this.props.approve(member);
    }

    render(){
        return (
            <Card >
                <CardMedia style={{height: 200}} image = {this.props.member.picture} />
                <CardContent>
                    <Typography type="headline" component="h2">
                        {this.props.member.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={this.approve} dense color="primary">
                        Approve
                    </Button>
                </CardActions>
            </Card>

        )
    }
}

export default connect(null,  actions)(UnapprovedMember)