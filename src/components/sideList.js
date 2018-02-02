
import React from 'react';
import { withRouter } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import Divider from 'material-ui/Divider'
import {PersonOutline  , PlayArrow , Group} from 'material-ui-icons';

let listStyle = {
    width:250
};

const route = (path, history , close)=>{
    history.push(path);
    close();

}

const SideList = withRouter(({ history , ...props}) => {
    return(
        <List style={listStyle}>
            <ListItem button onClick={() => route('/members',history , props.close)}>
                <ListItemIcon>
                    <Group />
                </ListItemIcon>
                <ListItemText primary="Members" />
            </ListItem>
            <ListItem button onClick={() => route('/unapprovedMembers',history , props.close)}>
                <ListItemIcon>
                    <Group />
                </ListItemIcon>
                <ListItemText primary="Unapproved Members" />
            </ListItem>
            <Divider/>
            <ListItem button onClick={() => route('/play',history , props.close)}>
                <ListItemIcon>
                    <PlayArrow />
                </ListItemIcon>
                <ListItemText primary="Games" />
            </ListItem>
            <Divider/>
            <ListItem button onClick={() => route('/profile',history , props.close)}>
                <ListItemIcon>
                    <PersonOutline />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
        </List>
    )
});

export default SideList;
