import React, {Component, Fragment } from 'react';
import {NavLink,withRouter} from "react-router-dom";
import {isAuthenticated, logoutData} from "../../auth/index";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    onClickLogout() {
        logoutData(() => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="nav-link" to="/"
                    >NAM</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home </NavLink>
                            </li>

                            {isAuthenticated() && isAuthenticated().user.roleid === '1' && (
                                <li className="nav-item">
                                    <NavLink to="/admin"  className="nav-link">
                                        Admin
                                    </NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/posts.php">Posts</NavLink>
                            </li>
                            {
                                isAuthenticated() && (
                                    <Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/newpost">New Post</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link" onClick={this.onClickLogout}>Logout</span>
                                        </li>
                                    </Fragment>
                                )
                            }
                            {
                                !isAuthenticated() && (
                                    <Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/register">Register</NavLink>
                                        </li>
                                    </Fragment>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Navbar);