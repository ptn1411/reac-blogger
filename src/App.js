import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./rotuer/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <Router>
                <Menu/>
            </Router>
        )
    }
}

export default App;
