import React, {Component} from 'react';
import {connect} from "react-redux";
import HeadMeta from "../parts/head";
import Post from "../../services/post.service";
import moment from "moment";

class Postuuid extends Component {
    constructor(props) {
        super(props);
        this.getPostUuid = this.getPostUuid.bind(this);

        this.state = {
            title: '',
            view_number: '0',
            image: '',
            summary: '',
            content: '',
            category_id: '4',
            user_uuid: '',
            createdAt: '',
            post_uuid:'',
        }
    }

    componentDidMount() {
        const {post} = this.props;
        if (post.length === 0) {
            this.getPostUuid(this.props.match.params.uuid);
        } else {
            for (let i = 0; i < post.length; i++) {
                if (post[i].slug === this.props.match.params.uuid) {
                    this.setState({
                        title: post[i].title,
                        view_number: post.view_number,
                        image: post[i].image,
                        summary: post[i].summary,
                        content: post[i].content,
                        category_id: post[i].category_id,
                        user_uuid: post[i].user_uuid,
                        createdAt: post[i].createdAt,
                        post_uuid: post[i].post_uuid
                    });
                    break;
                } else {
                    this.getPostUuid(this.props.match.params.uuid);
                }
            }
        }

    }


    getPostUuid(uuid) {

        Post.getPostUuid(uuid).then(result => {
            if (result.data.data) {
                const {
                    title,
                    view_number,
                    image,
                    summary,
                    content,
                    category_id,
                    user_uuid,
                    createdAt,
                    post_uuid
                } = result.data.data;
                this.setState({
                    title: title,
                    view_number: view_number,
                    image: image,
                    summary: summary,
                    content: content,
                    category_id: category_id,
                    user_uuid: user_uuid,
                    createdAt: createdAt,
                    post_uuid:post_uuid
                });
            }

        }).catch(err => console.log(err))
    }

    viewPost = (title,
                view_number,
                image,
                summary,
                content,
                category_id,
                user_uuid,
                createdAt) => {
        return (
            <div className="col">
                <div className="mt-5 mb-5">
                    <h1>{title}</h1>
                    <p>{summary}</p>
                    <span>{view_number}</span>
                    <div dangerouslySetInnerHTML={{__html: content}}>
                    </div>

                    <div>{category_id}</div>
                    <div>
                        {user_uuid}
                    </div>
                    <div>
                        <span>{moment(createdAt).format("DD/MM/YYYY")}</span>
                    </div>
                </div>
            </div>

        )
    }

    render() {

        const head = {
            title: 'Post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        };

        const {
            title,
            view_number,
            image,
            summary,
            content,
            category_id,
            user_uuid,
            createdAt
        } = this.state;
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container">
                    <div className="row">
                        {this.viewPost(title,
                            view_number,
                            image,
                            summary,
                            content,
                            category_id,
                            user_uuid,
                            createdAt)}
                    </div>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
    };
};
export default connect(mapStateToProps, {})(Postuuid);