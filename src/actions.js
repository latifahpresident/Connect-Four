export const DROP_TOKEN = 'DROP_TOKEN';
export const GAME_START = 'GAME_START';
export const CURRENT_PLAYER = 'CURRENT_PLAYER';

export const startGame = () =>  dispatch => {
    dispatch( {
        type: 'GAME_START',
        payload: true
    })
    dispatch({
        type: 'CURRENT_PLAYER',
        payload: 1
    })
}

export const dropToken = col => {
    console.log('in actions')
   return { 
        type: 'DROP_TOKEN',
        payload: col
    }; 
}