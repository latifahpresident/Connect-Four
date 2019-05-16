import { DROP_TOKEN, GAME_START} from './actions.js'
const initialState = {
    active_game: false,
    current_player: 1,
    winner: '',
    gameBoard: [
        [], // these are the column the token fills in lowest disc. inside each columns theres an item for the row
        [],
        [], //  [red [ yell  [yell
        [], //   yell  red    yell
        [], //   red   red    yell
        [], //   red]  yell]  yell]
        []
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GAME_START: 
        console.log(' game active:', action.payload)
            return {
                ...state,
                active_game: action.payload
            }
        case DROP_TOKEN:
        console.log(' column:', action.payload)
                const token = state.current_player
                const column = state.gameBoard[action.payload].concat(token)
                const gameBoard = state.gameBoard.slice()
                gameBoard[action.payload] = column
            return {
                ...state,
                current_player: state.current_player === 1 ? 2 : 1,
                gameBoard: gameBoard
            };

        default: 
            return state
            
    }

}

// current player
// gameboard
// 7 col 6 row
// active game
// winner