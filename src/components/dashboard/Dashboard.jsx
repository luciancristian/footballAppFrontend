import React, { Component } from 'react';
import Table from './Table.jsx';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
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
            <div className="dashboard-container">
                <div className="row">
                    <div>
                    <Table users={this.state.users}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

