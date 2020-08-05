import React, { Component } from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import history from './history';


const store = ConfigureStore();

class App extends Component{
  
  render() {
    
  return (
    <Router history={history}>
    <Provider store= {store} >
     <BrowserRouter>
    <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
      </Router>
  );
}

}

export default App;
