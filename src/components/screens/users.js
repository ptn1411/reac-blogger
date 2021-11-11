import React, {Component} from 'react';
import Card from "../parts/card";
import {connect} from "react-redux";
import {getAllUser} from "../../actions/user";
import Loading from "../parts/loading";
import HeadMeta from "../parts/head";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        const {user} = this.props;
        if (user.length > 0) {
            this.setState({loading: false});
        }else {
            this.props.getAllUser().then(res => {
                this.setState({loading: false});
            }).catch(err => {
                console.log(err);
            })
        }
    }


    render() {

        const head = {
            title: 'Users',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow'
        }
        const {loading} = this.state;

        const {user} = this.props;
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <h1 className="text-center">Home</h1>
                    {loading ? (<Loading/>) : ("")}
                    <div className="row">
                        <Card user={user}/>
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
    getAllUser
})(Users);