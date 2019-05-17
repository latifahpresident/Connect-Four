import React, { Component } from 'react';
import { startGame } from './actions';
import { connect } from 'react-redux';
import Gameboard from './Gameboard';
import './App.css';


  // 7 col 6 row
  const cells = [] //6 rows

  for (let y = 5; y >= 0; y--) {
    const row = [] // will make 6 rows

    for (let x = 0; x < 7; x++) { // will make 7 columns
      row.push(<Gameboard  key= {x} columns={x} rows={y}/>)
      console.log(`colmun length`, row)  //outputs 7
    }

    cells.push(<div className='row' key={y}>{row}</div>) 
  }
  console.log(`row length`, cells) //outputs 6


class App extends Component  {
  
  start = event => {
    console.log(`starting game, `, this.props.Gameboard)
    event.preventDefault()
    this.props.begin()
    this.checkWin(this.props.Gameboard)
}


  render () {
    console.log(`is game active`, this.props.start_game)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.props.begin}> Start Game </button>
        <p>Game Active: {this.props.start_game ? 'True' : 'False'}</p>
        <p> The Current Player is: Player {this.props.current_ply}</p>
        <p>Winner: Player {this.props.winner}</p>
      </header>
      {cells}
    </div>
  )}
}

const mapStateToProps = state => {
  console.log(state, 'app state')
  return {
      current_ply: state.current_player,
      winner: state.winner,
      start_game: state.active_game,
      game_board: state.gameBoard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
      begin: () => dispatch(startGame())
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(App);
