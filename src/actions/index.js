import * as TYPES from './types'
import fire from '../fire'
import firebase from 'firebase'
import history from '../history'
const members = fire.database().ref('members');
const unapprovedMembers = fire.database().ref('unapprovedMembers');
const game = fire.database().ref('live/game');

const game2 = fire.database().ref('games');

const userPath = fire.database().ref('members');
const unapprovedMemberPath = fire.database().ref('unapprovedMembers');

const auth = fire.auth();

export function liveGame(){
    return dispatch => {
        game.on('value' , snapshot =>{

            const val = snapshot.val()
            dispatch({
                type: TYPES.CHESS_MOVE,
                payload: val

            })
        })
    }
}

export function move(fen,history){
    return dispatch => game.update(
        {
            id:1,
            fen:fen,
            history:history
        }
    )
}

export function startGame(){
    return dispatch => {

        let newRef = game2.push({
            fen:'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            turn:'w',
            history:[{move:'',fen:'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'}],
        });
        dispatch({
            type: TYPES.START_NEW_GAME,
            payload: newRef.getKey()
        })
    }

}


export function fetchMembers(){
    return dispatch => {
        members.on('value', snapshot => {
            dispatch({
                type: TYPES.FETCH_MEMBERS,
                payload: snapshot.val()
            })

        })

    }
}

export function fetchUnapprovedMembers(){
    return dispatch => {
        unapprovedMembers.on('value', snapshot => {
            dispatch({
                type: TYPES.FETCH_UNAPPROVED_MEMBERS,
                payload: snapshot.val()
            })

        })

    }
}




export function signIn(){
    return dispatch => {
        const provider = new firebase.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider).then(function (result) {
            let  uid = result.additionalUserInfo.profile.id;
            userPath.child(uid).once("value",function (data) {
                let registeredMember = data.val()

                const user = getUserFromLocalStorage();

                if (registeredMember!=null){

                    dispatch({
                        type : TYPES.LOGIN,
                        payload: user
                    })
                }else{
                    let userInfo = {[uid]: result.additionalUserInfo.profile}
                    unapprovedMemberPath.update(userInfo)
                    dispatch({
                        type : TYPES.APPROVAL_PENDING,
                        payload: user
                    })
                }
            })

        })
    }
}

/*export function user(){
    return dispatch=> {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: TYPES.AUTH_CHANGED,
                payload: user
            })
        })
    }
}*/

export function signOut(){
    return dispatch=>{
        auth.signOut().then(function () {
            dispatch({
                type:TYPES.LOGOUT,
                payload:null
            })
        })
    }
}

export function approve(member) {
    return dispatch => {
        unapprovedMembers.child(member.id).remove();
        userPath.child(member.id).update(member);
        dispatch({
            type: TYPES.APPROVED,
            payload: null
        });
    }
}

export function flip(){
    return dispatch => {
        dispatch({
            type:TYPES.FLIP_BOARD_CURRENT_GAME,
            payload:null
        })
    }
}

export function nextMove(){
    return dispatch => {
        dispatch({
            type:TYPES.NEXT_MOVE_CURRENT_GAME,
            payload:null
        })
    }
}

export function previousMove(){
    // TODO implement move forward in history for current game
    return dispatch => {
        dispatch({
            type:TYPES.PREVIOUS_MOVE_CURRENT_GAME,
            payload:null
        })
    }
}

export function startOfGame(){
    // TODO implement move to start of current game
    return dispatch => {
        dispatch({
            type:TYPES.FIRST_MOVE_CURRENT_GAME,
            payload:null
        })
    }
}

export function endOfGame(){
    // TODO implement move to end of current game
    return dispatch => {
        dispatch({
            type:TYPES.LAST_MOVE_CURRENT_GAME,
            payload:null
        })
    }
}

export function jumpToMove(position) {
    return dispatch => {
        dispatch({
            type:TYPES.JUMP_TO_MOVE_CURRENT_GAME,
            payload:position
        })
    }
}

function getUserFromLocalStorage(){
    const userKey = Object.keys(window.localStorage)
        .filter(it => it.startsWith('firebase:authUser:'))[0];

    const user = JSON.parse(window.localStorage.getItem(userKey)) || {};
    return user;
}

export function challenge(opponent){
    return dispatch => {
        // TODO
        // get Current User Data.
        // insert into games ref.

        // redirect to PLAY page with URL.
        history.push('/play')
    }
}