import React, { Component } from 'react';
import {Router ,Switch , Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import User from '../containers/User';
import IconButton from 'material-ui/IconButton';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu'
import SideList from './sideList'
import Grid from 'material-ui/Grid'
import MemberPage from '../containers/memberPage'
import UnapprovedMemberPage from '../containers/unapprovedMemberPage'
import LiveGamePage from '../containers/liveGamePage';

import EditProfile from '../containers/editProfile'

import './App.css';

import history from '../history'


const theme = createMuiTheme();
const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class AppShell extends Component {

  constructor(props){
      super(props);
      this.state = {
          open: false
      }
  }
  toggleDrawer = () => this.setState({ open: !this.state.open });


    render() {
        const { classes } = this.props;
        return (
            <Router history={history}>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <AppBar position="static">
                                    <Toolbar>
                                        <IconButton  color="contrast" aria-label="Menu">
                                            <MenuIcon onClick={this.toggleDrawer} />
                                        </IconButton>
                                        <Typography type="title" color="inherit" >
                                            Pong's Chess Club
                                        </Typography>
                                        <div style={{flex:'1 1 auto'}}></div>
                                        <User/>
                                    </Toolbar>
                                </AppBar>
                            </Grid>

                            <Grid item xs={12}>
                                <Switch>
                                    <Route path="/members" component={MemberPage}></Route>
                                    <Route path="/unapprovedMembers" component={UnapprovedMemberPage}></Route>
                                    <Route path="/play" component={ LiveGamePage }></Route>
                                    <Route path="/profile" component={EditProfile}></Route>
                                    <Route path="/" component={MemberPage}></Route>
                                </Switch>
                            </Grid>
                        </Grid>
                    </div>
                    <Drawer open={this.state.open} onClose={this.toggleDrawer}>
                        <div
                            tabIndex={0}
                            role="button">
                            <SideList close={this.toggleDrawer}/>
                        </div>
                    </Drawer>
                </MuiThemeProvider>
            </Router>
        );
      }
}

export default withStyles(styles)(AppShell);
