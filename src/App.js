import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import "./components/TodoComponents/Todo.css";

const todoListData = [];

const searchData = ""

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoListData,
      search: searchData
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
      }),
      search: this.state.search != "" || null ? this.state.search.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      }) : ""
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem],
      search: ""
    });
  };

  clearComplete = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed),
      search: this.state.search != "" || null ? this.state.search.filter(item => !item.completed) : ""
    });
  };

  clearAll = () => {
    this.setState({
      todo: todoListData,
      search: ""
    });
  };

  filterSearch = value => {
    this.setState({
      search: this.state.todo.length === 1 ? "" : this.state.todo.filter(item =>
        item.task.toLowerCase().includes(value.toLowerCase())
      )
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
          <TodoForm addItem={this.addItem} filterSearch={this.filterSearch} />
          <TodoList
            toggleItem={this.toggleItem}
            clearComplete={this.clearComplete}
            clearAll={this.clearAll}
            todo={this.state.todo}
            search={this.state.search}
          />
        </div>
      </div>
    );
  }
}

export default App;
