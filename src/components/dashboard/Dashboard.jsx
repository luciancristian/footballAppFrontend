import React, { Component } from 'react';
import Table from './Table.jsx';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }


  // MOUNTING: Cand componenta se termina de montat(a rulat render() pentru prima oara) este apelata
  // metoda componentDidMount.
  componentDidMount() {
    console.log('App component finished mounting!');
    // ATENTIE! De cele mai multe ori, vom primi datele despre userii nostri de la un API. Daca vrem doar
    // sa afisam niste date primite in pagina, am vrea sa le cerem o singura data: cand montam pagina. Mai
    // precis, cand terminam de montat pagina, vrem sa si aducem datele de la API(backend).
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

