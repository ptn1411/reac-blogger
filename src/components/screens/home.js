import React, {Component} from 'react';
import Card from "../parts/card";
import {connect} from "react-redux";
import {getAllUser} from "../../actions/crud";
import Loading from "../parts/loading";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.props.getAllUser().then(res=>{
            this.setState({loading: false});
        }).catch(err=>{
            console.log(err);
        })

    }


    render() {
        const {loading} = this.state;

        const {crud} = this.props;
        return (
            <>

                <div className="container">
                    <h1 className="text-center">Home</h1>
                    {loading ? (<Loading/>) : ("")}
                    <div className="row">
                        <Card cards={crud}/>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        crud: state.crud,
    };
};
export default connect(mapStateToProps, {
    getAllUser
})(Home);