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
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Pranjal Verma")}>
          Switch Name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "PRANJAL")}
          change={this.changeNameHandler}
        />
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>
          My hobbies are:Racing
        </Person>
      </div>
    );
  }
}

export default App;
