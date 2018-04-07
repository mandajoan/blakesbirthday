import React, { Component } from 'react';
import Surprise from './surpise'
import  ninjagif from './imgFile'

import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false
        }
    }

    handleClick() {
        this.setState({
                show:true
            })
            
        }
            
        
    
    showBlake() {
        return (
            <Surprise />
            )
        
    }
  
    showMessage() {
        return (
            <div>
            <div>
                <img src={require("./images/ninjagif.gif")} alt="img"/>
            </div>
            <p className="App-intro">
                I can't believe you are 5 years old!
        </p>
            <button className="surpriseButton" onClick={(event) => { this.handleClick(event) }} > Click for a Surprise! </button>
            </div >
            
            )
    }
    blake() {
        if (this.state.show == true) {
            return (
                this.showBlake()
                )
        } else {
            return (
                this.showMessage()
                )
        }
    }
    render() {
        let closemodal = () => this.setState({
            show: false
        })
    return (
        <div className="App">
         
        <header className="App-header">
          
                <h1 className="titleSection">Happy Birthday</h1>
                <h1 className="titleSection">my Little Ninja!</h1>
            </header>
        {this.blake()} 
       
            </div>
        
    );
  }
}

export default App;
