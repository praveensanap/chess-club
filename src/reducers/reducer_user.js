import {LOGIN,LOGOUT,APPROVAL_PENDING } from '../actions/types'


const userKey = Object.keys(window.localStorage)
    .filter(it => it.startsWith('firebase:authUser:'))[0];

const user = JSON.parse(window.localStorage.getItem(userKey)) || {};


export default function(state = user, action){
    switch (action.type){
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return {}
        case APPROVAL_PENDING:
            return action.payload;
        default:
            return state
    }
}