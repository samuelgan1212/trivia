import React, { Component } from 'react';
import {data} from './data.js';
// import components


class Question extends Component {
  constructor(props) {
      super(props);
      /*
      class questions {
        constructor(question, choice1, choice2, choice3,choice4){
          this.question=question;
          this.choice1=choice1;
          this.choice2=choice2;
          this.choice3=choice3;
          this.choice4=choice4;
        }
      }
      */
     this.state = {
      
     }
     // this.state = {question: questions.question}
  }
    handleClick =() =>{ 
      this.props.next(1);
    }
    
    render() {
      const {question, choice1, choice2, choice3, choice4} = this.props.question;
      return (
        <div>
          <html>{question}</html>
          <button>{choice1} </button>
          <button>{choice2} </button>
          <button>{choice3}</button>
          <button>{choice4}</button>
          <button onClick={this.handleClick}>Next!</button>
        </div>
      );
    }
}


export default Question;