import React, {Component} from 'react';
import {connect} from "react-redux";
import Post from "../../services/post.service";
import HeadMeta from "../parts/head";
import Postform from "../parts/postform";
import TinyEditorComponent from "../parts/TinyEditorComponent";
import {usePostEdit, userDelete} from "../../actions/post";
import avatar from "../../assets/avatar.png";
import {isAuthenticated} from "../../auth";

class Editpost extends Component {
    constructor(props) {
        super(props);
        this.getPostUuid = this.getPostUuid.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.checkUser = this.checkUser.bind(this);

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
        this.formData = new FormData();

        const {post} = this.props;
        if (post.length > 0) {

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
                        post_uuid: post[i].post_uuid,

                    });
                    this.checkUser(post[i].user_uuid)
                    break;
                }
            }
        } else {

            this.getPostUuid(this.props.match.params.uuid);
        }
        const {
            title,
            view_number,
            summary,
            content,
            category_id,
        } = this.state;
        this.formData.set('title', title);
        this.formData.set('view_number', view_number);
        this.formData.set('summary', summary);
        this.formData.set('content', content);
        this.formData.set('category_id', category_id);
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
                this.checkUser(user_uuid);
                this.formData.set('title', title);
                this.formData.set('view_number', view_number);
                this.formData.set('summary', summary);
                this.formData.set('content', content);
                this.formData.set('category_id', category_id);

            }

        }).catch(err => console.log(err))
    }

    checkUser(user_uuid) {
        if (isAuthenticated() && isAuthenticated().user.uuid === user_uuid) {

        } else if (isAuthenticated() && isAuthenticated().user.roleid === "9") {

        } else {
            this.props.history.push("/posts.php");
        }
    }

    handleChange(event) {
        this.setState({content: event});
        this.formData.set("content", event);
    }

    onChangeForm = name => event => {
        this.setState({error: ""});
        const value = name === "image" ? event.target.files[0] : event.target.value;

        const fileSize = name === "image" ? event.target.files[0].size : 0;

        this.formData.set(name, value);

        this.setState({[name]: value, fileSize});

    }

    handleDelete() {
        this.setState({
            loading: true
        });

        const {post_uuid} = this.state;
        this.props.userDelete(post_uuid).then(() => {
            alert("thanh cong");
            this.props.history.push("/posts.php");
        }).catch(err => {
            console.log(err);
            alert("that bai")
        })

    }

    handleSubmit() {
        this.setState({
            loading: true
        });
        const {post_uuid} = this.state;

        this.props.usePostEdit(post_uuid, this.formData).then((result) => {
            this.props.history.push(`/post.php/${result.slug}`);
        })
    }

    formPost = (content, post_uuid, title) => (
        <div className="mt-5 mb-5">
            <img className="hover-zoom"
                 style={{width: "30%"}}
                 src={`${process.env.REACT_APP_API_URL}/api/post/photo.php/${post_uuid}`}
                 onError={i => (i.target.src = `${avatar}`)}
                 alt={title}/>
            <Postform value={this.state} onChange={(event) => this.onChangeForm(event)}/>
            <div className="form-group">
                <TinyEditorComponent value={content} onChange={this.handleChange}/>
            </div>
            <div className="text-center mt-5 mb-5">
                <button onClick={this.handleSubmit} className="btn btn-primary">
                    Submit
                </button>
                <button onClick={this.handleDelete} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    )

    render() {

        const head = {
            title: 'Edit Post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        };
        const {content, post_uuid, title} = this.state;
        return (
            <>
                <HeadMeta head={head}/>
                <div className="container ">
                    <h1 className="text-center">Edit Post</h1>
                    <div className="row">
                        {this.formPost(content, post_uuid, title)}
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
    usePostEdit, userDelete
})(Editpost);