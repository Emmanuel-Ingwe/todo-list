import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";
// import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <TodoList />
        </div>
      </div>
    );
    // return (
    //   <div>
    //     <Link activeClassName="asct" to="/Todolist"></Link>
    //   </div>
    // );
  }
}



export default App;
