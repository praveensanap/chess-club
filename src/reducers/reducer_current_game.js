import * as TYPES  from  '../actions/types';
const DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const DEFAULT = {
    fen: DEFAULT_POSITION,
    history:[{move:'' , fen:DEFAULT_POSITION}],
    currentPosition:0,
}

export default function (state = DEFAULT, action) {
    let currentPosition = state.currentPosition || 0;


    let lastPosition = state.history.length-1;
    let notFirst = currentPosition !== 0;
    let notLast = currentPosition !== lastPosition;
    switch (action.type) {
        case TYPES.CHESS_MOVE:
            return {
                ...state,
                ...action.payload,
                currentPosition: lastPosition,

            };
        case TYPES.START_NEW_GAME:
            return {
                ...DEFAULT,
                id:action.payload
            }
        case TYPES.NEXT_MOVE_CURRENT_GAME:
            return {
                ...state,
                currentPosition: currentPosition + 1*notLast
            };
        case TYPES.PREVIOUS_MOVE_CURRENT_GAME:
            return {
                ...state,
                currentPosition: currentPosition - 1*notFirst
            };
        case TYPES.FIRST_MOVE_CURRENT_GAME:
            return {
                ...state,
                currentPosition: 0
            };
        case TYPES.LAST_MOVE_CURRENT_GAME:
            return {
                ...state,
                currentPosition: lastPosition
            };
        case TYPES.FLIP_BOARD_CURRENT_GAME:
            return {
                ...state,
                playingBlack: !state.playingBlack
            }
        case TYPES.JUMP_TO_MOVE_CURRENT_GAME:
            return {
                ...state,
                currentPosition: action.payload
            }
        default:
            return state
    }
}

