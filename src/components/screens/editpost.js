import React, {Component} from 'react';
import Post from "../../services/post.service";
import HeadMeta from "../parts/head";
import Postform from "../parts/postform";
import TinyEditorComponent from "../parts/TinyEditorComponent";

class Editpost extends Component {
    constructor(props) {
        super(props);
        this.getPostUuid = this.getPostUuid.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeForm = this.onChangeForm.bind(this);

        this.state = {
            title: '',
            view_number: '0',
            image: '',
            summary: '',
            content: '',
            category_id: '4',
            user_uuid: '',
            createdAt: ''
        }
    }

    componentDidMount() {
        this.formData = new FormData();
        this.getPostUuid(this.props.match.params.uuid);

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
                    createdAt
                } = result.data.data;
                this.setState({
                    title: title,
                    view_number: view_number,
                    image: image,
                    summary: summary,
                    content: content,
                    category_id: category_id,
                    user_uuid: user_uuid,
                    createdAt: createdAt
                });
            }

        }).catch(err => console.log(err))
    }

    handleChange(event) {
        this.setState({content: event});
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
    handleSubmit(){

    }
    formPost = (content) => (
        <div className="mt-5 mb-5">
            <Postform value={this.state} onChange={(event)=>this.onChangeForm(event)}/>
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
            title: 'Edit Post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        };

        return (
            <>
                <HeadMeta head={head}/>
                <div className="container ">
                    <h1 className="text-center">Edit Post</h1>
                    <div className="row">
                        {this.formPost(this.state.content)}
                    </div>

                </div>
            </>
        );
    }
}

export default Editpost;