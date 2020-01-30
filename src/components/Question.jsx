import React, { Component } from 'react';
import {data} from './data.js';
// import components


class Question extends Component {
  constructor(props) {
      super(props);
      class questions {
        constructor(question, choice1, choice2, choice3,choice4){
          this.question=question;
          this.choice1=choice1;
          this.choice2=choice2;
          this.choice3=choice3;
          this.choice4=choice4;
        }
      }
      this.state = {question: questions.question}
  }
    handleClick(){ 
      var new_click_question = this.data[0];
      this.setState(this.data[0].question);
    }
    
    render() {
      return (
        <div>
          <html>{this.state.question}</html>
          <button onClick={()=> this.handleClick()}>Next!</button>
        </div>
      );
    }
}


export default Question;