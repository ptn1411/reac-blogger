import React from "react";
import {Link} from "react-router-dom";

const Loading =(props) => {
    return (
        <div className="text-center mt-5 mb-5">
            <div className="jumbotron">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <Link className="btn btn-primary" to="/">Home</Link>
        </div>
    )
}
export default Loading;