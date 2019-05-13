import { DROP_TOKEN } from './actions.js'
const initialState = {
    current_player: 'player_1',
    winner: '',
    active_game: false,
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
    console.log('inside reducer', )

    switch(action.type) {
        case DROP_TOKEN:

            return {
                active_game: action.payload.game,
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