import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainNav from './navigator/appnavigator';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    );
  }
}

export default App;
