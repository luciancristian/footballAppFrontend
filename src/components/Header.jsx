import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link className="nav-link container-fluid d-flex justify-content-between align-items-center text-white" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item active">
                        <Link className="nav-link d-inline p-2 bg-dark text-white" to="/championship">ChampionshipTable</Link>
                    </li>
                    <li className="nav-item active">
                        <Link  className="nav-link d-inline p-2 bg-dark text-white" to="/insert">InsertMatch</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="d-inline p-2 bg-dark text-white" to="/login" >Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="d-inline p-2 bg-dark text-white" to="/logout" >Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

        // <nav classNameName="navbar navbar-fixed-top bg-primary">
        //     <div classNameName="container-fluid">
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        //         <ul classNameName="nav navbar-nav justify-content-right">
        //             <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <li classNameName="nav-item nav-link">
        //                     <Link classNameName="d-inline p-2 bg-dark text-white" to="/">Home</Link> 
        //                 </li>
        //                 <li classNameName="nav-item nav-link">
        //                     <Link classNameName="d-inline p-2 bg-dark text-white" to="/championship">ChampionshipTable</Link>
        //                 </li>
        //                 <li classNameName="nav-item nav-link">
        //                     <Link  classNameName="d-inline p-2 bg-dark text-white" to="/insert">InsertMatch</Link>
        //                 </li>
        //                 <li classNameName="nav-item nav-link">
        //                     <Link classNameName="d-inline p-2 bg-dark text-white" to="/login" >Login</Link>
        //                 </li>
        //                 <li classNameName="nav-item nav-link">
        //                     <Link classNameName="d-inline p-2 bg-dark text-white" to="/login" >Logout</Link>
        //                 </li>
        //             </div>
        //         </ul>
        //     </div>
        //     </div>
        // </nav>

        // <Navbar bg="dark" expand="lg">
        // <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        // <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav>
        //         <Link classNameName="d-inline p-2 bg-dark text-white" to="/">Home</Link>
        //         <Link classNameName="d-inline p-2 bg-dark text-white" to="/championship">ChampionshipTable</Link>
        //         <Link classNameName="d-inline p-2 bg-dark text-white" to="/insert">InsertMatch</Link>
        //         <Link classNameName="d-inline p-2 bg-dark text-white text-right" to="/login" >Logare</Link>
        //     </Nav>
        // </Navbar.Collapse>
        // </Navbar>
          
    );
}

export default Header;