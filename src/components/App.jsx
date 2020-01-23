import React, { Component } from 'react';
import Question from "./Question.jsx";
import '../css/App.css';
// import components

class App extends Component {

  render() {
    return (
      <div>
      <div class="title">
        <h1>Anime Trivia!</h1> 
      </div>
      <div class="Question">
       
      <Question/>
      </div>
      </div>
      
    );
  }
}

export default App;