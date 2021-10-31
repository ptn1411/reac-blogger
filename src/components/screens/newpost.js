import React, {Component} from 'react';
import HeadMeta from "../parts/head";
import TinyEditorComponent from "../parts/TinyEditorComponent";


class Newpost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }


    handleChange(event) {
        this.setState({value: event});
        console.log(event)
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const head = {
            title: 'New post',
            description: 'Nam dep trai',
            keywords: 'Nam dep trai,react',
            robots: 'noindex,nofollow',
        }
        const {value} = this.state;
        return (
            <>
                <HeadMeta head={head}/>

                <div className="container mt-5 mb-5">
                    <h1 className="text-center">New Post</h1>
                    <div className="form-group">
                        <TinyEditorComponent value={value}  onChange={this.handleChange}/>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <button className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </>

        );
    }
}

export default Newpost;