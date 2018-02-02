import React , {Component} from 'react';
import {Grid } from 'material-ui';

import Member from './member';
import _ from 'lodash'
import UnapprovedMember from "./unapprovedMember";

class MemberList extends Component{


    renderMember(key,member){
        let {approved }= this.props;
        if(approved){
            return <Member key={key} member={member}/>
        }
        return <UnapprovedMember key={key} member={member}/>
    }


    renderMembers(members){
        return _.map(members ,(member,key) =>
            <Grid item xs={4}>
                {this.renderMember(key,member)}
            </Grid>

        )
    }

    render(){
        let {members }= this.props;

        return <Grid container spacing={24}>
            {this.renderMembers(members)}
        </Grid>
    }
}

export default MemberList;