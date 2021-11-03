import Loading from "./loading";
import React from "react";
import {Link} from "react-router-dom";
import moment from 'moment';
import avatar from "../../assets/avatar.png";
const Postitem = (props) => {
    const {postitem}=props;
  return(
      <div className="card-deck mb-5">
          {
              postitem ? postitem.map((postitem,index) => (
                      <div className="card" key={index}>
                          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                          <img className="card-img-top" src={avatar} alt="Card image cap"/>
                              <div className="card-body">
                                  <h5 className="card-title">{postitem.title}</h5>
                                  <p className="card-text">{postitem.summary}</p>
                                  <p className="card-text"><small className="text-muted">{moment(postitem.createdAt).format("DD/MM/YYYY")}</small></p>
                                  <Link to={`/post/${postitem.slug}`} className="btn btn-primary">View</Link>
                                  <Link to={`/postedit/${postitem.slug}`} className="btn btn-warning">Edit</Link>
                              </div>
                      </div>

              )) :(
                  <Loading/>
              )
          }
      </div>
  )
}

export default Postitem;


