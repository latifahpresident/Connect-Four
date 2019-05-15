import React, { Component } from 'react';
import { startGame } from './actions';
import { connect } from 'react-redux';
import Gameboard from './Gameboard';
import './App.css';


  // 7 col 6 row
  const row = [] //6 rows

  for (let y = 6; y >= 0; y--) {
    const col = [] // will make 6 rows

    for (let x = 0; x < 7; x++) { // will make 7 columns
      col.push(<Gameboard columns={x} rows={y}/>)
      console.log(`colmun length`, col)  //outputs 7
    }

    row.push(<div className='row'>{col}</div>) 
  }
  console.log(`row length`, row) //outputs 6


class App extends Component  {
  
  start = event => {
    console.log(`starting game`)
    event.preventDefault()
    this.props.begin()
}
  render () {
    console.log(`is game active`, this.props.start_game)
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={this.start}> Start Game </button>
        <p>Game Active: {this.props.start_game }</p>
        <p> The Current Player is: Player {this.props.current_ply}</p>
       
      </header>
      <div className='rows'>
      {row}
      </div>
     
    </div>
  )}
}

const mapStateToProps = state => {
  return {
      current_ply: state.current_player,
      winner: state.winner,
      start_game: state.active_game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
      begin: () => dispatch(startGame())
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( App);
