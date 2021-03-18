import { Component } from 'react';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ text: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    if (this.state.text.length === 0) return;

    const newItem = {
      id: new Date(),
      text: this.state.text
    }

    this.setState(state => ({
      text: '',
      items: state.items.concat(newItem)
    }));
  }

  render() {
    return (
      <div>
        <h2>TODO</h2>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="new-todo">What's we need to be done?</label>
          <br/>
          <input
            id="new-todo"
            onChange={this._handleChange}
            value={this.state.text}
          />
          <button type="submit">Add #{this.state.items.length + 1}</button>
        </form>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

export default Todo;
