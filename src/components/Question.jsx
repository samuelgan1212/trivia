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
        score:0,
     }
     // this.state = {question: questions.question}
  }
    handleClick =(event) =>{ 
      event.stopPropagation();
      this.props.next(1);
      // this.props.Choicepick;
    }
    answerClick =(index) =>{
      this.props.Choicepick(index);
    }
    
    render() {
      
      const {question, choice1, choice2, choice3, choice4,score} = this.props.question;
      return (
        <div>
          <html>{question}</html>

          <html>score:{this.props.score}</html>
          <button id="correctans"onClick={()=> this.answerClick(0)}>{choice1} </button>
          <button id="correctans"onClick={()=> this.answerClick(1)}>{choice2} </button>
          <button id="correctans"onClick={()=> this.answerClick(2)}>{choice3}</button>
          <button id="correctans"onClick={()=> this.answerClick(3)} >{choice4}</button>
          <button id="NextButton"onClick={this.handleClick}>Next!</button>
        </div>
      );
      
           }
    }


export default Question;