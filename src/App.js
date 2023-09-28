import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MegaSena from './components/jogos/MegaSena';
import Lotofacil from './components/jogos/Lotofacil';
import Quina from './components/jogos/Quina';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/megasena">
            <MegaSena />
          </Route>
          <Route path="/lotofacil">
            <Lotofacil />
          </Route>
          <Route path="/quina">
            <Quina />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
