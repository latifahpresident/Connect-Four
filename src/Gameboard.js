import React, { Component } from 'react';
import { dropToken, startGame } from './actions';
import { connect } from 'react-redux';
import './App.css';

class Gameboard extends Component  {

    handleClick = () => {
         //telling me which col was click
      this.props.drop(this.props.columns)
    }

    
    render () {
        // console.log(`props`, this.props)
        const board = this.props.game_board
        const col = this.props.columns
        const rows = this.props.rows

        let activeClass = 'board'
        if(board[col][rows] !== undefined) {
            if(board[col][rows] === 1) {
                activeClass += ' player_2'
            } else {
                activeClass += ' player_1'
            }
        }
       
        return (
            <div className={activeClass} onClick={this.handleClick}>
            {/* <p>column: {this.props.columns}, <br/> row: {this.props.rows} </p>       */}

    
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        current_ply: state.current_player,
        winner: state.winner,
        start_game: state.active_game,
        game_board: state.gameBoard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        drop: col => dispatch(dropToken(col)),
        startGame: () => dispatch(startGame())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gameboard)