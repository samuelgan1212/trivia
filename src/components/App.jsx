import React, { Component } from 'react';
import Question from "./Question.jsx";
import '../css/App.css';
import data from './data';

class App extends Component {

  constructor() {
    super();
    this.state ={
      currentQuestion : 0,
      currentchoice1:0,
      currentchoice2:0,
      currectchoice3:0,
      currentchoice4:0,
    }
  }
  next = () => {
    this.setState({currentQuestion: this.state.currentQuestion +1});
    this.setState({currentchoice1 : this.state.currentchoice1 +1});
    this.setState({currentchoice2 : this.state.currentchoice2 +1});
    this.setState({currentchoice3 : this.state.currentchoice3 +1});
    this.setState({currentchoice4 : this.state.currentchoice4 +1});
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