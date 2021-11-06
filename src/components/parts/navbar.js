import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="nav-link" to="/"
                    >Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/newpost">New Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/posts">Posts</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;