import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Navbar from "../components/parts/navbar";
import Footer from "../components/parts/footer";
import Home from "../components/screens/home";
import Login from "../components/screens/login";
import User from "../components/screens/user"
import Register from "../components/screens/register";
import Newpost from "../components/screens/newpost";
import Posts from "../components/screens/posts";
import Postuuid from "../components/screens/postuuid";
import editPost from "../components/screens/editpost";
import Notfound from "../components/screens/notfound";
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
                    <Route exact  path="/posts.php" component={Posts}/>
                    <Route exact  path="/post/:uuid" component={Postuuid}/>
                    <Route exact  path="/postedit/:uuid" component={editPost}/>

                    <Route exact  path="/notfound.php" component={Notfound}/>
                    <Route exact  path="*" component={Notfound}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default Menu;