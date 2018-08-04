import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" render={ ()=>(
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
              </header>

              )
          }/>
          <Route path="/about" render={()=>(<div>ABOUT</div>)}/>
          <Route path="/work" render={()=>(<div>WORK</div>)}/>
      </div>
    );
  }
}

export default App;
