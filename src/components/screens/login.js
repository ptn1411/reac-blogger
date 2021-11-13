import React, {Component} from 'react';

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginData, authenticate, isAuthenticated} from "../../auth/index";
import Loading from "../parts/loading";
import HeadMeta from "../parts/head";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false,
            loading: false,
            error: ''

        }
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    componentDidMount() {
        if (isAuthenticated()) {
            this.setState({
                login: true
            });
        } else {
            this.setState({
                login: false
            });
        }
    }

    onChangeLogin = name => event => {
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    submitLogin() {
        this.setState({loading: true});
        const {username, password} = this.state;
        let data = {
            username: username,
            password: password,
        };
        loginData(data).then((results) => {
            if (results.data.error) {
                this.setState({error: results.data.error, loading: false});
                alert(results.data.error);
            } else {
                authenticate(results.data, () => {
                    this.setState({
                        login: true
                    });
                });
            }
        });
    }

    loginForm = (username, password) => (
        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <label>Username & Email</label>
                    <input type="text" className="form-control"
                           placeholder="Username & Email"
                           value={username}
                           onChange={this.onChangeLogin("username")}
                           minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                           placeholder="Password"
                           value={password}
                           onChange={this.onChangeLogin("password")}
                           minLength="6"
                    />

                </div>
                <button onClick={this.submitLogin}
                        className="btn btn-primary m-1">Sign In
                </button>
            </div>
        </div>

    )

    render() {
        const head = {
            title: 'Login',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }
        const {username, password, login, loading} = this.state;
        if (login) {
            return <Redirect to='/'/>
        }
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <h2 className="text-center">Login</h2>

                    <div>
                        {!loading ? this.loginForm(username, password) : (<Loading/>)}


                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps)(Login);