import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MegaSena from './components/jogos/MegaSena';
import Lotofacil from './components/jogos/Lotofacil';
import Quina from './components/jogos/Quina';
import Registration from './components/User/Register';
import Login from './components/User/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
          <PrivateRoute path="/megasena" component={MegaSena} />
          <PrivateRoute path="/lotofacil" component={Lotofacil} />
          <PrivateRoute path="/quina" component={Quina} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
