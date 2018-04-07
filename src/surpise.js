import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import  blakeNinja from './imgFile'
import './App.css';

class Surprise extends Component {
    render() {
        return (
            
           
           
            <div>
                <br />
                            <img className="blake" src={require("./images/blake.JPG")} />  
                            <h2> You are the best ninja ever!</h2>
                            <h3> Love, Taylor </h3>
                            
            </div >
            
            )
    }



}

export default Surprise;