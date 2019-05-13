export const DROP_TOKEN = 'DROP_TOKEN';

export const dropToken = col => dispatch => {
    const payload = {
        col,
        current_player: 'player_2',
        game: true
    }
    dispatch({ 
        type: 'DROP_TOKEN',
        payload: payload
    }); 
}