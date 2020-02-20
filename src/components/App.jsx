import React, { Component } from 'react';
import Question from "./Question.jsx";
import '../css/App.css';
import data from './data';

class App extends Component {

  constructor() {
    super();
    this.state ={
      currentQuestion : 0,
    }
  }
  next = () => {
    this.setState({currentQuestion : this.state.currentQuestion +1});
  }
  render() {
    
    return (
      <div>
        <div class="title">
         <h1>Anime Trivia!</h1> 
        </div>
        <div class="Question">
          <Question question={data[this.state.currentQuestion]} next={this.next}/>
        </div>
      </div>
      
    );
  }
}

export default App;