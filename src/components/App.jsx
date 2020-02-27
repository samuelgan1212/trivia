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
      score:0
      
    }
  }
  next = () => {
    //if(this.currentQuestion<=data.length-1){
   // }
      
      this.setState({currentQuestion: this.state.currentQuestion +1});
      this.setState({currentchoice1 : this.state.currentchoice1 +1});
      this.setState({currentchoice2 : this.state.currentchoice2 +1});
      this.setState({currentchoice3 : this.state.currentchoice3 +1});
      this.setState({currentchoice4 : this.state.currentchoice4 +1});
      // this.setState({score: this.state.score +1});
      

  }
  handleChoicepick = (index) => {
    if(index===data[this.state.currentQuestion].answer){
      this.setState({score:this.state.score+1});
      // return (alert("Correct"));
     // return true;
    }
    // else if(index===this.props.answer){
    //   return (alert("correct"));
    // }
    // else if(index===this.props.answer){
    //   return (alert("correct"));
    // }
    // else if(index===this.props.answer){
    //   return (alert("correct"));
    // }
    else{
      return (alert("Wrong"));
    }
  }
  render() {
    
    return (
      <div>
        <div class="title">
         <h1>Anime Trivia!</h1> 
        </div>
        <div class="Question">
          <Question score ={this.state.score} Choicepick={this.handleChoicepick} question={data[this.state.currentQuestion]} next={this.next} Nextbutton={Question[this.state.NextButton]}/>
        </div>
      </div>
      
    );
  }
}

export default App;