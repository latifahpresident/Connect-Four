import React, { Component } from 'react';
import { dropToken, startGame, stopGame } from './actions';
import { connect } from 'react-redux';
import './App.css';

class Gameboard extends Component  {

   checkBoard = () => {
        this.props.drop(this.props.columns)
        //top to bottom
         for (let i = 1; i<= 2; i++) {
            console.log(this.props.game_board, 'win board')
            for ( let x = 0; x<= 3; x++) {
                console.log(i, 'player')
                for ( let y = 0; y<=5; y++) {
                    if(this.props.game_board[y][x] === i) {
                        if(this.props.game_board[y][x + 1] && this.props.game_board[y][x + 2] && this.props.game_board[y][x + 3]) {
                            let winner = i
                            console.log( 'winner is: ', winner)
                            this.props.stopGame(winner)
                            return 
                        }
                    }
                }
            }
         }
      
    }
   
    handleClick = () => {
         //telling me which col was click
         if(this.props.start_game) {
            this.checkBoard(this.props.game_board)
         } else {
             alert('Please Start Game')
         }
      
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
            <div className={activeClass} onClick={this.handleClick}></div>
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
        startGame: () => dispatch(startGame()),
        stopGame: winner => dispatch(stopGame(winner))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gameboard)