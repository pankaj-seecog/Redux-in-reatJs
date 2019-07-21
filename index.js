import React, { Component } from 'react';
import { render } from 'react-dom';
import India from './India';
import './style.css';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import playersReducer from './store/players.reducer';
import runsReducer from './store/runs.reducers';


let rootReducer = combineReducers({
  playerRed : playersReducer,
  runsRed : runsReducer
});


let store = createStore(rootReducer);


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Provider store={store}><India /></Provider>, document.getElementById('root'));
