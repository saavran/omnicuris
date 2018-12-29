import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import QuestionOne from "../src/components/QuestionOne/QuestionOne"
import QuestionTwo from "../src/components/QuestionTwo/QuestionTwo"
import QuestionThree from "../src/components/QuestionThree/QuestionThree"
import QuestionFour from "../src/components/QuestionFour/QuestionFour"
import Home from "../src/components/Home"
import Finish from "../src/components/Finish"
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch(`/questions.json`)
      .then((response) => response.json())
      .then((data) => data.map(option => (
        {
          question: `${option.question}`,
          one: `${option.one}`,
          two: `${option.two}`,
          three: `${option.three}`,
          four: `${option.four}`
        }
      )))
      .then(quiz => this.setState({ quiz }))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={(props) => (<Home />)} exact />
          <Route path="/q1" render={(props) => (<QuestionOne quiz={this.state.quiz} />)} />
          <Route path="/q2" render={(props) => (<QuestionTwo quiz={this.state.quiz} />)} />
          <Route path="/q3" render={(props) => (<QuestionThree quiz={this.state.quiz} />)} />
          <Route path="/q4" render={(props) => (<QuestionFour quiz={this.state.quiz} />)} />
          <Route path="/finish" render={(props) => (<Finish />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;