import React from 'react';
import Gameboard from './Gameboard';
import './App.css';

function App() {
  // 7 col 6 row
  const row = [] //6 rows

  for (let y = 0; y < 6; y++) {
    const col = [] // will make 6 rows

    for (let x = 0; x < 7; x++) { // will make 7 columns
      col.push(<Gameboard columns={x} rows={y}/>)
      console.log(`colmun length`, col.length)  //outputs 7
    }

    row.push(<div className='row'>{col}</div>) 
  }
  console.log(`row length`, row.length) //outputs 6
  
  return (
    <div className="App">
      <header className="App-header">
       home
      </header>
      {row}
    </div>
  );
}

export default App;
