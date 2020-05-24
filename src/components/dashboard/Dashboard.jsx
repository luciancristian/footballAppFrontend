import React, { Component } from 'react';
import Table from './Table.jsx';
import Navbar from '../layout/Navbar.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            users: []
        };
    }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Dupa ce transformam rezultatul request-ului in JSON, putem sa actualizam state-ul cu datele primite.
        this.setState({users: data});
      })
  }

    render() {
        return (
            <div>
            <Navbar/> 
            <div className="dashboard-container">
                <div className="row">
                    <div>
                    <Table users={this.state.users}/>
                    </div>
                </div>
            </div>
            </div>
         

        );
    }
}

export default Dashboard;

