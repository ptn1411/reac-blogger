import React, {Component} from 'react';
import HeadMeta from "../parts/head";
import {connect} from "react-redux";
import {getPostData} from "../../actions/post";
import Postitem from "../parts/postitem";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getPostData().then(results => {
        }).catch(err => console.log(err));
    }


    render() {

        const head = {
            title: 'Posts',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        };
        const {post} = this.props;
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <div className="text-center mt-5 mb-5">
                        <h1>Post</h1>

                    </div>
                    <div className="row">
                        <Postitem postitem={post}/>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
    };
};
export default connect(mapStateToProps, {
    getPostData
})(Posts);