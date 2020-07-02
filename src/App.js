import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import CountContainer from './containers/container';
import { store } from './redux/configure-store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <CountContainer />

      </Provider>
    </div>
  );
}

export default App;
