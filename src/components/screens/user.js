import React, {Component} from 'react';

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Crud from "../../services/user.service";
import {userDelete, userEdit} from "../../actions/user";
import moment from 'moment';
import Loading from "../parts/loading";
import HeadMeta from "../parts/head";
import {isAuthenticated} from "../../auth";
import avatar from "../../assets/avatar.png";

class User extends Component {

    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.checkUser = this.checkUser.bind(this);
        this.state = {
            uuid: "",
            username: "",
            password:"",
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            gender: '',
            roleid: "",
            createdAt: "",
            updatedAt: "",
            redirect: false,
            loading: false,
            isDisabled: true,
        }

    }

    componentDidMount() {
        this.userData = new FormData();
        this.getUser(this.props.match.params.uuid).then(() =>{

        } );
        this.setState({loading: true});

    }

    async getUser(uuid) {
        let res = await Crud.getUserUuid(uuid);
        if (res.data.data) {
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
            this.userData.set("username",res.data.data.username);
            this.userData.set("firstName",res.data.data.firstName);
            this.userData.set("lastName",res.data.data.lastName);
            this.userData.set("email",res.data.data.email);
            this.userData.set("address",res.data.data.address);
            this.userData.set("gender",res.data.data.gender);
            this.userData.set("roleid",res.data.data.roleid);

            this.checkUser(res.data.data.uuid);
        } else {
            this.props.history.push("/notfound.php");
        }

    }

    checkUser(user_uuid) {
        if (isAuthenticated() && isAuthenticated().user.uuid === user_uuid) {
            this.setState({
                isDisabled:false
            })
        } else if (isAuthenticated() && isAuthenticated().user.roleid === "9") {
            this.setState({
                isDisabled:false
            })
        }
    }

    onChangeForm = name => event => {
        const value = name === "image" ? event.target.files[0] : event.target.value;

        const fileSize = name === "image" ? event.target.files[0].size : 0;

        this.userData.set(name, value);

        this.setState({[name]: value, fileSize});
    }
    editSubmit = () => {
        this.setState({loading: true});

        this.props.userEdit(this.state.uuid,this.userData).then((res) => {
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

    userForm = (uuid, username, password,firstName, lastName, email, address, gender, date, isDisabled) => (
        <div className="col-6 mt-5 mb-5">
            <img className="hover-zoom"
                 style={{width: "30%"}}
                 src={`${process.env.REACT_APP_API_URL}/api/user/photo.php/${uuid}?${new Date().getTime()}`}
                 onError={i => (i.target.src = `${avatar}`)}
                 alt={username}/>
            <div className="form-group">
                <label>Image</label>
                <input
                    onChange={this.onChangeForm("image")}
                    type="file"
                    accept="image/*"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control"
                       placeholder="Username"
                       value={username}
                       onChange={this.onChangeForm("username")}
                       disabled={isDisabled}
                />

            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                       placeholder="Password"
                       value={password}
                       onChange={this.onChangeForm("password")}
                       disabled={isDisabled}
                />

            </div>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control"
                       placeholder="First Name"
                       value={firstName}
                       onChange={this.onChangeForm("firstName")}
                       disabled={isDisabled}
                />

            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control"
                       placeholder="Last Name"
                       value={lastName}
                       onChange={this.onChangeForm("lastName")}
                       disabled={isDisabled}
                />

            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"
                       placeholder="Email"
                       value={email}
                       onChange={this.onChangeForm("email")}
                       disabled={isDisabled}

                />
            </div>
            <div className="form-group">
                <label htmlFor="inputState">Sex</label>
                <select id="inputState" className="form-control" value={gender}
                        onChange={this.onChangeForm("gender")}
                        disabled={isDisabled}
                >
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
                       disabled={isDisabled}
                />

            </div>

            <div className="form-group">
                <label>Created At</label>
                <p>{date}</p>
            </div>

            { isAuthenticated() && isAuthenticated().user.uuid === uuid &&  isAuthenticated().user.roleid !== "9" &&(
                <>
                    <button onClick={this.editSubmit} className="btn btn-success m-1">Save</button>
                    <button onClick={this.deleteUser} className="btn btn-danger m-1">Delete</button>
                </>
            )}

            {isAuthenticated() && isAuthenticated().user.roleid === "9" && (
                <>
                    <button onClick={this.editSubmit} className="btn btn-success m-1">Save</button>
                    <button onClick={this.deleteUser} className="btn btn-danger m-1">Delete</button>
                </>
            )}


        </div>
    )

    render() {

        const head = {
            title: 'User Profile',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }

        const {
            uuid,
            username,
            password,
            firstName,
            lastName,
            email,
            address,
            gender,
            createdAt,
            loading,
            isDisabled
        } = this.state;
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
                        {loading ? ("") : (this.userForm(uuid, username, password,firstName, lastName, email, address, gender, date, isDisabled))}
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