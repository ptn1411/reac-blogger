import React, {Component} from 'react';
import HeadMeta from "../parts/head";
import {connect} from "react-redux";
import {usePostPage} from "../../actions/post";
import Postitem from "../parts/postitem";
import InfiniteScroll from 'react-infinite-scroll-component';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.fetchMoreData = this.fetchMoreData.bind(this);
        this.state = {
            page: 0,
            size: 4,
            hasMore: true
        }

    }

    componentDidMount() {
        const {post} = this.props;
        if (post.length > 0) {
            console.log("1")
        } else {
            this.fetchMoreData();
        }

    }

    fetchMoreData() {
        const {page, size} = this.state;
        this.props.usePostPage(page, size).then(() => {
            this.setState({
                page: this.state.page + 1,
            })
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

                    <InfiniteScroll
                        dataLength={post.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<h4>Loading...</h4>}
                        style={{overflow: "none"}}
                    >
                        <div className="row">
                            <Postitem postitem={post}/>
                        </div>
                    </InfiniteScroll>


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
    usePostPage
})(Posts);