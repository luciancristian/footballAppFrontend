import React from 'react';
import './App.css';
import InsertMatch from './components/InsertMatch.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import ChampionshipTable from './components/ChampionshipTable.jsx';
import Page404 from './components/Page404.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      username: '',
      email: '',
      password:''
    }
  }

  

  render () {
    return (
    <Router>
      <div className="app">
     
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path='/home/:username' component={Dashboard}/>
              <Route path="/insert" component={InsertMatch}/>
              <Route path="/championship" component={ChampionshipTable}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/register" component={Register}/>
              <Route path='/*' component={Page404}/>
            </Switch>
        </div>
    </Router> 
    );
  }
}

export default App;
