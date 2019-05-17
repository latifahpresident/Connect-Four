export const DROP_TOKEN = 'DROP_TOKEN';
export const GAME_START = 'GAME_START';
export const CURRENT_PLAYER = 'CURRENT_PLAYER';
export const WINNER_START = 'WINNER_START';
export const WINNER_FOUND = 'WINNER_FOUND';

export const startGame = () =>  dispatch => {
    dispatch( {
        type: 'GAME_START',
        payload: true
    })
}

export const dropToken = col => {
    console.log('in actions')
   return { 
        type: 'DROP_TOKEN',
        payload: col
    }; 
}

export const stopGame = winner => dispatch =>  {
    dispatch({
        type: 'WINNER_START'
    })
    dispatch({
        type: 'WINNER_FOUND',
        payload: winner
    })
}