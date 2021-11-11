import React, {Component} from 'react';
import {connect} from "react-redux";
import {userRegister} from "../../actions/user";
import {Redirect} from "react-router-dom";
import Loading from "../parts/loading";
import HeadMeta from "../parts/head";
import {isAuthenticated} from "../../auth";

class Register extends Component {

    constructor(props) {
        super(props);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.saveRegister = this.saveRegister.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            address: '',
            gender: '0',
            redirect: false,
            loading: false,
            login: false
        }
    }
    componentDidMount() {
        if(isAuthenticated()){
            this.setState({
                login: true
            });
        }else {
            this.setState({
                login: false
            });
        }
    }

    onChangeForm = name => event => {
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveRegister() {
        this.setState({
            loading: true
        });
        const {username, firstName, lastName, email, password, address, gender} = this.state;
        let data = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: address,
            gender: gender
        }
        this.props.userRegister(data).then((res) => {
            this.setState({
                redirect: true,
                loading: false
            })
        }).catch((e) => {
            console.log(e)
        })
    }
    registerForm = (firstName, lastName, password, username, email, address, gender) => (
        <div className="col-8">

            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control"
                       placeholder="First Name"
                       value={firstName}
                       onChange={this.onChangeForm("firstName")}
                />

            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control"
                       placeholder="Last Name"
                       value={lastName}
                       onChange={this.onChangeForm("lastName")}
                />

            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"
                       value={username}
                       onChange={this.onChangeForm("username")}
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                           value={email}
                           onChange={this.onChangeForm("email")}

                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"
                           placeholder="Password"
                           value={password}
                           onChange={this.onChangeForm("password")}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress"
                       placeholder="1234 Main St"
                       value={address}
                       onChange={this.onChangeForm("address")}
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Sex</label>
                    <select id="inputState" className="form-control"
                            value={gender}
                            onChange={this.onChangeForm("gender")}>
                        <option value="0">Men</option>
                        <option value="2">Female</option>
                    </select>
                </div>
            </div>
            <button onClick={this.saveRegister} className="btn btn-primary">Register</button>
        </div>
    )
    render() {
        const head = {
            title: 'Register',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
        const {firstName, lastName, password, username, email, address, gender,login} = this.state;
        if (login) {
            return <Redirect to='/'/>
        }
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <div className="row">
                        {this.state.loading === true ? (<Loading/>) : ("")}
                        {this.registerForm(firstName, lastName, password, username, email, address, gender)}
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
export default connect(mapStateToProps, {
    userRegister
})(Register);