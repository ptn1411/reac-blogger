import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Navbar from "../components/parts/navbar";
import Footer from "../components/parts/footer";
import Home from "../components/screens/home";
import Login from "../components/screens/login";
import User from "../components/screens/user"
import Register from "../components/screens/register";
import Newpost from "../components/screens/newpost";
import Posts from "../components/screens/posts"
class Menu extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route exact  path="/login" component={Login}/>
                    <Route exact  path="/register" component={Register}/>
                    <Route exact  path="/user/:uuid" component={User}/>
                    <Route exact  path="/newpost" component={Newpost}/>
                    <Route exact  path="/posts" component={Posts}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default Menu;