import React, {Component} from 'react';

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {LoginData, authenticate} from "../../auth/index";
import Loading from "../parts/loading";
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

    onChangeLogin = name => event => {
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    submitLogin() {
        this.setState({ loading: true });
        const {username, password} = this.state;
        let data = {
            username: username,
            password: password,
        };
        LoginData(data).then((results) => {
            console.log(results)
            if (results.error) {
                this.setState({error: results.error, loading: false});
                alert(results.error);
            }else {
                authenticate(results, () => {
                    this.setState({
                        login: true
                    })
                });
            }
        });
    }

    loginForm = (username, password) => (
        <div className="col-6">
            <div className="form-group">
                <label>Username & Email</label>
                <input type="text" className="form-control"
                       placeholder="Username & Email"
                       value={username}
                       onChange={this.onChangeLogin("username")}

                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                       placeholder="Password"
                       value={password}
                       onChange={this.onChangeLogin("password")}
                />

            </div>
            <button onClick={this.submitLogin}
                    className="btn btn-primary m-1">Sign In
            </button>
        </div>
    )

    render() {
        const {username, password, login,loading} = this.state;
        if (login) {
            return <Redirect to='/'/>
        }
        return (
            <>
                <div className="container">
                    <h2 className="text-center">Login</h2>
                    {loading ? (<Loading/>):("")}
                    <div className="row">
                        {this.loginForm(username, password)}

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};
export default connect(mapStateToProps)(Login);