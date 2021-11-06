import React, {Component} from 'react';
import {connect} from "react-redux";
import HeadMeta from "../parts/head";
import Post from "../../services/post.service";
import moment from "moment";
import avatar from "../../assets/avatar.png";

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
            post_uuid: '',
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        const {post} = this.props;
        if (post.length > 0) {
            for (let i = 0; i < post.length; i++) {
                if (post[i].slug === this.props.match.params.uuid) {
                    this.setState({
                        title: post[i].title,
                        view_number: post[i].view_number,
                        summary: post[i].summary,
                        content: post[i].content,
                        category_id: post[i].category_id,
                        user_uuid: post[i].user_uuid,
                        createdAt: post[i].createdAt,
                        post_uuid: post[i].post_uuid
                    });
                    this.setState({
                        loading: false
                    })
                    break;
                }
            }
        }else {
            this.getPostUuid(this.props.match.params.uuid);
            this.setState({
                loading: false
            });
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
                    post_uuid: post_uuid
                });
            }else {
                this.props.history.push("/notfound.php");
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
                post_uuid,
                createdAt) => {
        return (
            <div className="col">
                <div className="mt-5 mb-5">
                    <h1>{title}</h1>
                    <p>{summary}</p>
                    <span>{view_number}</span>
                    <img className="hover-zoom" style={{width: "30%"}}
                         src={`${process.env.REACT_APP_API_URL}/post/photo.php/${post_uuid}?${new Date().getTime()}`}
                         onError={i => (i.target.src = `${avatar}`)}
                         alt={title}/>
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
        } = this.state;

        const head = {
            title: `${title} | Post`,
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        };
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
                            post_uuid,
                            createdAt,
                        )}
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