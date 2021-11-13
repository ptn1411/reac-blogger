import React, {Component} from 'react';
import {connect} from "react-redux";
import HeadMeta from "../parts/head";
import {useUserCount, usePostCount} from "../../actions/dashboard";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleClickLoad = this.handleClickLoad.bind(this);
    }

    componentDidMount() {
        this.props.useUserCount();
        this.props.usePostCount();
    }

    handleClickLoad() {
        this.props.useUserCount();
        this.props.usePostCount();
    }

    render() {
        const head = {
            title: 'Dashboard',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }

        const {connect, countuser, countpost} = this.props.dashboard;
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <h2 className="text-center">
                        Dashboard
                    </h2>

                    <div className="row m-t-25 mb-5 mt-5">
                        <div className="col-sm-6 col-lg-3">
                            <div className="text">
                                <h2>{connect ? connect.length : 0}</h2>
                                <span>Members online</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="text">
                                <h2>{countuser ? countuser : 0}</h2>
                                <span>User</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="text">
                                <h2>{countpost ? countpost : 0}</h2>
                                <span>Post</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="text">
                                <h2>10368</h2>
                                <span>members online</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={this.handleClickLoad}>
                            Load
                        </button>
                    </div>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard,
    };
};
export default connect(mapStateToProps, {
    useUserCount, usePostCount
})(Dashboard);