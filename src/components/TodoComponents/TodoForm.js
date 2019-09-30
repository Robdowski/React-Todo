import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
      search: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  submitSearch = e => {
      e.preventDefault();
      this.props.filterSearch(this.state.search)
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.item}
            name="item"
            onChange={this.handleChanges}
          />
          <button>Add Item</button>
          <br />
        </form>
        <form className="search-form" onSubmit={this.submitSearch}>
        <input
                type="text"
                value={this.search}
                name="search"
                onChange={this.handleChanges}
                />
                <button>Search</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
