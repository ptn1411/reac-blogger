import React, {Component} from 'react';

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Crud from "../../services/user.service";
import {userDelete, userEdit} from "../../actions/user";
import moment from 'moment';
import Loading from "../parts/loading";
import HeadMeta from "../parts/head";

class User extends Component {

    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.state = {
            uuid: "",
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            gender: '',
            roleid: "",
            createdAt: "",
            updatedAt: "",
            redirect: false,
            loading: false
        }

    }

    componentDidMount() {
        this.userData = new FormData();
        this.getUser(this.props.match.params.uuid);
        this.setState({loading: true});
    }

    async getUser(uuid) {
        let res = await Crud.getUserUuid(uuid);
        this.setState({
            uuid: res.data.data.uuid,
            username: res.data.data.username,
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            email: res.data.data.email,
            address: res.data.data.address,
            gender: res.data.data.gender,
            roleid: res.data.data.roleid,
            createdAt: res.data.data.createdAt,
            updatedAt: res.data.data.updatedAt,
            loading: false
        });
    }

    onChangeForm = name => event => {
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.userData.set(name, value);
    }
    editSubmit = () => {
        this.setState({loading: true});
        const {uuid, username, firstName, lastName, email, address, gender} = this.state;
        let data = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            gender: gender
        }
        this.props.userEdit(uuid, data).then((res) => {
            if (res) {
                this.setState({loading: false});
            } else {
                alert("that bai")
            }
        }).catch((e) => {
            console.log(e)
        });
    }

    deleteUser() {
        this.setState({loading: true});
        const {uuid} = this.state;
        this.props.userDelete(uuid).then((res) => {
            if (res) {
                this.setState({loading: false});
                this.setState({redirect: true});
            } else {
                alert("that bai")
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    userForm = (username, firstName, lastName, email, address, gender, date) => (
        <div className="col-6 mt-5 mb-5">
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control"
                       placeholder="Username"
                       value={username}
                       onChange={this.onChangeForm("username")}
                />

            </div>
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
                <label>Email</label>
                <input type="email" className="form-control"
                       placeholder="Email"
                       value={email}
                       onChange={this.onChangeForm("email")}

                />
            </div>
            <div className="form-group">
                <label htmlFor="inputState">Sex</label>
                <select id="inputState" className="form-control" value={gender}
                        onChange={this.onChangeForm("gender")}>
                    <option value="0">Men</option>
                    <option value="2">Female</option>

                </select>
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" id="address" className="form-control"
                       placeholder="Address"
                       value={address}
                       onChange={this.onChangeForm("address")}
                />

            </div>

            <div className="form-group">
                <label>Created At</label>
                <p>{date}</p>
            </div>

            <button onClick={this.editSubmit} className="btn btn-success m-1">Save</button>
            <button onClick={this.deleteUser} className="btn btn-danger m-1">Delete</button>

        </div>
    )

    render() {

        const head = {
            title: 'User Profile',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }

        const {username, firstName, lastName, email, address, gender, createdAt, loading} = this.state;
        const date = moment(createdAt).format("DD/MM/YYYY");
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    {loading ? (<Loading/>) : ("")}
                    <div className="row">
                        {loading ? ("") : (this.userForm(username, firstName, lastName, email, address, gender, date))}
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
    userEdit, userDelete
})(User);