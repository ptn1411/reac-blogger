import React, {Component} from 'react';
import HeadMeta from "../parts/head";

class Post extends Component {

    render() {

        const head = {
            title: 'Post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        }
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <div className="text-center mt-5 mb-5">
                        <h1>Post</h1>
                    </div>
                    <div className="row">

                    </div>
                </div>

            </>
        );
    }
}

export default Post;