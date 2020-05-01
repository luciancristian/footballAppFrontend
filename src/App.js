import React from 'react';
import './App.css';
import InsertMatch from './components/InsertMatch.jsx';
import Login from './components/Login.jsx';
import ChampionshipTable from './components/ChampionshipTable.jsx';
import Page404 from './components/Page404.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/insert" component={InsertMatch}/>
            <Route path="/championship" component={ChampionshipTable}/>
            <Route path="/login" component={Login}/>
            <Route path='*' component={Page404}/>
          </Switch>
        </>
        </Router>
    </div>
    );
  }
}

export default App;
