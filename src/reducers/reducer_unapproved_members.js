import {FETCH_UNAPPROVED_MEMBERS} from '../actions/types'

export default function(state={} , action){
    switch (action.type){
        case FETCH_UNAPPROVED_MEMBERS:
            return action.payload;
        default:
            return state;
    }

}