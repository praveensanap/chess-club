import React , { Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

import MemberList from '../components/memberList'
class MemberPage extends Component {

    componentDidMount() {
        this.props.fetchMembers();
    }

    render(){
        return <MemberList approved={true} members={this.props.members}></MemberList>
    }
}
function mapStateToProps({members}) {
    return {members}
}

export default connect(mapStateToProps , actions)(MemberPage);