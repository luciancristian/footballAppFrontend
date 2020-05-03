import React, { Component } from 'react';
import Table from './Table.jsx';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="row">
                    <div>
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

