import React, { Component } from 'react';
import './App.css';

class Gameboard extends Component  {

    handleClick = () => {
        console.log(`click column:`, this.props.columns) //telling me which col was click
    }
    render () {
        return (
            <div className='board' onClick={this.handleClick}>
                <p>{this.props.columns}, {this.props.rows}</p>      
            </div>
        )
    }
}

export default Gameboard