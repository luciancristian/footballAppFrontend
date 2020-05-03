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
        </tr>
      )
    }
  
    return (
      <div className="container">
       <span class="table-title centered">Championship Table</span>
        <table className="dashboard-container">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
          </tr>
        </thead>
        <tbody className="container-fluid">
          {users.map(renderUsers)}
      {/* //     <tr>
      //       <td>Alviasdasdadadadadadadadan</td>
      //       <td>Eclaasdadadadadasdadadbaaaaaaaaaaaaaaaddddddddddddddddddddddddd</td>
      //     </tr>
      //     <tr>
      //       <td>Alan</td>
      //       <td>Jellybean</td>
      //     </tr>
      //     <tr>
      //       <td>Jonathan</td>
      //       <td>Lollipop</td>
      //     </tr> */}
         </tbody>
       </table>
      </div>

    );
  
  
  }
}

export default Table;