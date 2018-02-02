import React , { Component } from 'react'
import {Button } from 'material-ui'
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar'

class User extends Component {

    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    renderButton(){
        const { user } = this.props;

        if(user.uid == null){
           return <Button color="contrast"  onClick={this.props.signIn}>Login</Button>
        }else{
          return <div style={{
              display: 'flex',
              justifyContent: 'center',
          }}>
            <Avatar onClick={this.handleClick}
              alt={user.displayName}
              src={user.photoURL}
              style={{
                  width: 40,
                  height: 40,
                  margin: 10,

              }}
          />
          </div>

        }
    }

    handleLogout(){
        this.props.signOut()
        this.handleClose()
    }

    render(){
        return <div>
            {this.renderButton()}
            <Menu

                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onClose={this.handleClose}
            >
                <MenuItem style={{width:'200px'}} onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem style={{width:'200px'}} onClick={()=>this.handleLogout()}>Logout</MenuItem>
            </Menu>
        </div>
    }
}

function mapStateToProps({user}) {
    return {user}
}

export default connect(mapStateToProps ,actions)(User);