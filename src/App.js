import {BrowserRouter as Router} from "react-router-dom";
import MainRouter from "./rotuer/mainrouter";
import "bootstrap/dist/css/bootstrap.min.css";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <Router>
                <MainRouter/>
            </Router>
        )
    }
}

export default App;
