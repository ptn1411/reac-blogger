import Loading from "./loading";
import React from "react";
import {Link} from "react-router-dom";
import moment from 'moment';
import avatar from "../../assets/avatar.png";
import "./css.css"
import {isAuthenticated} from "../../auth";
const Postitem = (props) => {
    const {postitem} = props;

    return (
        <>
            {
                postitem ? postitem.map((postitem, index) => (

                    <div className="card img-wrapper" key={index} style={{width: "25%"}}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

                        <img className="card-img-top hover-zoom"
                             src={`${process.env.REACT_APP_API_URL}/api/post/photo.php/${postitem.post_uuid}?${new Date().getTime()}`}
                             onError={i => (i.target.src = `${avatar}`)}
                             alt={postitem.title}/>
                        <div className="card-body">

                            <h5 className="card-title"> <Link to={`/post/${postitem.slug}`} className="link">
                                {postitem.title}
                            </Link></h5>
                            <p className="card-text">{postitem.summary}</p>
                            <p>{postitem.view_number} lượt xem</p>
                            <p className="card-text"><small
                                className="text-muted">{moment(postitem.createdAt).format("DD/MM/YYYY")}</small></p>
                            <Link to={`/post/${postitem.slug}`} className="btn btn-primary">View</Link>

                            {isAuthenticated() && isAuthenticated().user.uuid === postitem.user_uuid && (
                                <Link to={`/postedit/${postitem.slug}`} className="btn btn-warning">Edit</Link>
                            )}

                            { isAuthenticated() && isAuthenticated().user.roleid === "1" && (
                                <Link to={`/postedit/${postitem.slug}`} className="btn btn-warning">Edit</Link>
                            )}
                        </div>
                    </div>

                )) : (
                    <Loading/>
                )
            }
        </>
    )
}

export default Postitem;


