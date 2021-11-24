import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {connect} from "react-redux";
import Navbar from "../components/parts/navbar";
import Footer from "../components/parts/footer";
import Users from "../components/screens/users";
import Login from "../components/screens/login";
import User from "../components/screens/user"
import Register from "../components/screens/register";
import Newpost from "../components/screens/newpost";
import Posts from "../components/screens/posts";
import Postuuid from "../components/screens/postuuid";
import editPost from "../components/screens/editpost";
import Notfound from "../components/screens/notfound";
import PrivateRoute from "../auth/privateroute";
import Dashboard from "../components/screens/dashboard";
import Chat from "../components/screens/chat";
import Message from "../components/screens/message";
import {useConnect} from "../actions/dashboard";

class MainRouter extends Component {

    componentDidMount() {
        this.props.useConnect();

    }

    render() {

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Users}/>
                    <Route exact path="/index.php" component={Users}/>
                    <Route exact path="/login.php" component={Login}/>
                    <Route exact path="/register.php" component={Register}/>
                    <PrivateRoute exact path="/user.php/:uuid" component={User}/>

                    <PrivateRoute
                        exact
                        path="/newpost.php"
                        component={Newpost}
                    />

                    <Route exact path="/posts.php" component={Posts}/>
                    <Route exact path="/post.php/:uuid" component={Postuuid}/>
                    <PrivateRoute exact path="/postedit.php/:uuid" component={editPost}/>
                    <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                    <PrivateRoute exact path="/chat/:room_id/:room_name" component={Chat}/>
                    <PrivateRoute exact path="/message" component={Message}/>)} />

                    <Route exact path="/notfound.php" component={Notfound}/>
                    <Route exact path="*" component={Notfound}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard,
    };
};

export default connect(mapStateToProps, {
    useConnect
})(MainRouter);