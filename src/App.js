import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import "./components/TodoComponents/Todo.css"

const todoListData = [
  {
    task: "Take out garbage",
    id: 123,
    completed: false
  },
  {
    task: "Buy groceries",
    id: 1234,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoListData
    };
  }

  toggleItem = id => {
    console.log("item toggled", id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearComplete = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  clearAll = () => {
    this.setState({
      todo: []
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Robert's Todo List</h2>
          <TodoForm addItem={this.addItem} />
          <TodoList
            toggleItem={this.toggleItem}
            clearComplete={this.clearComplete}
            clearAll={this.clearAll}
            todo={this.state.todo}
          />
        </div>
      </div>
    );
  }
}

export default App;
