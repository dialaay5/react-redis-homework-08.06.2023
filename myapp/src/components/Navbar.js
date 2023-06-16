import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper">
            <div className="col s12">
                <Link to={`/`}>
                    <i className="brand-logo">Forward Thinking School</i>
                </Link>
                <ul className="right">
                    <li><NavLink to="/">Classes</NavLink></li>
                    <li><NavLink to="/createclass">Create Class</NavLink></li>
                    <li><NavLink to="/createstudent">Create Student</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)