
import React , { Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

import MemberList from '../components/memberList'
class UnapprovedMemberPage extends Component {

    componentDidMount() {
        this.props.fetchUnapprovedMembers();
    }

    render(){
        return <MemberList approved={false} members={this.props.unapprovedMembers}></MemberList>
    }
}
function mapStateToProps({unapprovedMembers}) {
    return {unapprovedMembers}
}

export default connect(mapStateToProps , actions)(UnapprovedMemberPage);