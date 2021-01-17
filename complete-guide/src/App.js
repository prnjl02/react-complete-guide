import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    person: [
      { name: "Prnjal", age: 28 },
      { name: "verma ", age: 26 },
      { name: "P", age: 25 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    console.log("Button is clicked");
    this.setState({
      person: [
        { name: newName, age: 25 },
        { name: "verma ", age: 26 },
        { name: "P", age: 26 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      person: [
        { name: "Pranjal", age: 25 },
        { name: event.target.value, age: 26 },
        { name: "P", age: 26 },
      ],
    });
  };

  renderConditionallyPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.person.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.renderConditionallyPersons}>Switch Name</button>
        {person}
      </div>
    );
  }
}

export default App;
