import React, {Component} from 'react';
import {connect} from "react-redux";
import HeadMeta from "../parts/head";
import TinyEditorComponent from "../parts/TinyEditorComponent";
import {isAuthenticated} from "../../auth";
import {usecreatePost} from "../../actions/post";

class Newpost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            view_number: '0',
            image: '',
            summary: '',
            content: '',
            category_id: '4',
            user_uuid: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.initUser = this.initUser.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);
    }

    componentDidMount() {
        this.formData = new FormData();
        this.initUser()
    }


    handleChange(event) {
        this.setState({content: event});
        this.formData.set("content",event);
    }

    onChangeForm = name => event => {
        this.setState({error: ""});
        const value = name === "image" ? event.target.files[0] : event.target.value;

        const fileSize = name === "image" ? event.target.files[0].size : 0;

        this.formData.set(name, value);

        this.setState({[name]: value, fileSize});

        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // });
    }


    handleSubmit(event) {
        event.preventDefault();
        const {
            title,
            view_number,
            image,
            summary,
            content,
            category_id,
            user_uuid
        } = this.state;

            this.formData.set('title', title);
            this.formData.set('view_number', view_number);
            this.formData.set('summary', summary);
            this.formData.set('image', image);
            this.formData.set('content', content);
            this.formData.set('category_id', category_id);
            this.formData.set('user_uuid', user_uuid);

            this.props.usecreatePost(this.formData).then(result => {
                alert(result.post_uuid);
                this.props.history.push("/posts.php");
            }).catch(err=>{
                console.log(err)
            });


    }

    initUser() {
        const user_uuid = isAuthenticated().user.uuid;
        this.setState({
            user_uuid: user_uuid
        });
    }

    formPost = (title, content, summary, category_id) => (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">New Post</h1>

            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control"
                       value={title}
                       onChange={this.onChangeForm("title")}
                       aria-describedby="emailHelp" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label>Summary</label>
                <input type="text" className="form-control"
                       value={summary}
                       onChange={this.onChangeForm("summary")}
                       aria-describedby="emailHelp" placeholder="Summary"/>
            </div>
            <div className="form-group">
                <label>Category</label>
                <select className="form-control"
                        value={category_id}
                        onChange={this.onChangeForm("category_id")}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="form-group">
                <label>Image</label>
                <input
                    onChange={this.onChangeForm("image")}
                    type="file"
                    accept="image/*"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <TinyEditorComponent value={content} onChange={this.handleChange}/>
            </div>
            <div className="text-center mt-5 mb-5">
                <button onClick={this.handleSubmit} className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )

    render() {
        const head = {
            title: 'New post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        }
        const {title, content, summary, category_id} = this.state;
        return (
            <>
                <HeadMeta head={head}/>
                {this.formPost(title, content, summary, category_id)}
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
    usecreatePost
})(Newpost);