import React, { Component } from 'react';
import { dropToken, startGame } from './actions';
import { connect } from 'react-redux';
import './App.css';

class Gameboard extends Component  {

    handleClick = () => {
        console.log(`click column:`, this.props.columns) //telling me which col was click
      this.props.drop(this.props.columns)
    }

    
    render () {
        return (
            <div className='board' onClick={this.handleClick}>
                <p>column: {this.props.columns}, <br/> row: {this.props.rows}</p>      
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        current_ply: state.current_player,
        winner: state.winner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        drop: col => dispatch(dropToken(col)),
        startGame: () => dispatch(startGame())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gameboard)