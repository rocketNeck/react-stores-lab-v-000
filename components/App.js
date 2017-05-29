import React from 'react';
import CounterStore from '../stores/counterStore'
import actions from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: CounterStore.getState()
    };

    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }
  componentDidMount () {
    this.removeListener = CounterStore.addListener(counter => {
      this.setState({ counter });
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  inc(e) {
    e.preventDefault();
    actions.increment();
  }

  dec(e) {
    e.preventDefault();
    actions.decrement();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.dec}>
            -
          </button>
          <button className='increment' onClick={this.inc}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
