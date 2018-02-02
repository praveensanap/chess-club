import {combineReducers} from 'redux'

import currentGame from './reducer_current_game'
import user from './reducer_user';
import members from './reducer_members';
import unapprovedMembers from './reducer_unapproved_members'

const rootReducer = combineReducers({
    currentGame,
    user,
    members,
    unapprovedMembers
});

export default rootReducer;