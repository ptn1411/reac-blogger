import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HeadMeta from "../components/parts/head";
import Navbar from "../components/parts/navbar";
import Footer from "../components/parts/footer";
import Home from "../components/screens/home";
import Login from "../components/screens/login";
import User from "../components/screens/user"
import Register from "../components/screens/register";
class Menu extends Component {
    render() {
        return (
            <Router>
                <HeadMeta/>
                <Navbar/>
                <Switch>
                    <Route exact  path="/" component={Home}/>
                    <Route exact  path="/login" component={Login}/>
                    <Route exact  path="/register" component={Register}/>
                    <Route exact  path="/user/:uuid" component={User}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default Menu;