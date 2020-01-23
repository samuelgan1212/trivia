import React, { Component } from 'react';
// import components


class Question extends Component {
  constructor(props) {
    super(props);
    var Question =[
      "What is the mc for demon slayer?",
      "Who is the Fourth Hokage in Naruto?",
      "What quirk does Bakugo have?"
  ]
    this.state = {question: Question[0]}
  }
  handleClick(){
    var new_click_question =this.state.click_question + 1;
  }
  render() {
    return (
      <div>
        <html>{this.state.question}</html>
      </div>
    );
  }
}

export default Question;