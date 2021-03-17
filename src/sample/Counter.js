import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this._increase = this._increase.bind(this);
    this._decrease = this._decrease.bind(this);
  }

  _increase(event) {
    event.preventDefault();
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  _decrease(event) {
    event.preventDefault();
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{ this.state.counter }</h1>
        <button onClick={ this._increase }>Increase</button>
        <button onClick={ this._decrease }>Decrease</button>
      </div>
    );
  }
}

export default Counter;
