import React from 'react';
import './Table.css';


class Table extends React.Component {

  render () {
    const {users} = this.props;

    const renderUsers = (user) => {
      return (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.id}</td>
        </tr>
      )
    }
  
    return (
      <div className="container">
       <div className="col s12 center">
         <span class="table-title centered"><h5>Championship Table</h5></span>
       </div>
    
        <table className="dashboard-container">
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Points</th>
          </tr>
        </thead>
        <tbody className="container-fluid">
          {users.map(renderUsers)}
         </tbody>
       </table>
      </div>

    );
  
  
  }
}

export default Table;