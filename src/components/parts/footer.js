import React, {Component} from 'react';
import { Link } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <footer className="bg-light text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <Link
                            className="btn btn-primary btn-floating m-1"

                            style={{backgroundColor: "#3b5998"}}
                            to="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"/></Link>


                        <Link
                            className="btn btn-primary btn-floating m-1"

                            style={{backgroundColor: "#55acee"}}
                            to="#!"
                            role="button"
                        ><i className="fab fa-twitter"/></Link>


                        <Link
                            className="btn btn-primary btn-floating m-1"

                            style={{backgroundColor: "#dd4b39"}}

                            to="#!"
                            role="button"
                        ><i className="fab fa-google"/></Link>


                        <Link
                            className="btn btn-primary btn-floating m-1"

                            style={{backgroundColor: "#ac2bac"}}
                            to="#!"
                            role="button"
                        ><i className="fab fa-instagram"/></Link>


                        <Link
                            className="btn btn-primary btn-floating m-1"

                            style={{backgroundColor: "#0082ca"}}
                            to="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"/></Link>

                        <Link
                            className="btn btn-primary btn-floating m-1"
                            style={{backgroundColor: "#333333"}}
                            to="#"
                            role="button"
                        ><i className="fab fa-github"/></Link>
                    </section>

                </div>

                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
                </div>

            </footer>
        );
    }
}

export default Footer;