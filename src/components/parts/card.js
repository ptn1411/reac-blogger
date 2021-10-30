import React from "react";
import {Link} from "react-router-dom";
import avatar from "../../assets/avatar.png";
import Loading from "./loading";
const Card = (props) => {
    const {cards} = props;

    return (
        <>{cards ?  cards.map((cards,i) => {

            return (
                <div key={i} className="card" style={{width: "18rem"}}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="card-img-top" src={avatar} onError={i=>(i.target.src=`${avatar}`)} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{cards.firstName}</h5>
                        <p className="card-text">{cards.email}</p>
                        <Link to={`/user/${cards.uuid}`} className="btn btn-primary">View user</Link>
                    </div>
                </div>
            )
        }):(
         <Loading/>
        )
       }
        </>
    )
}
export default Card;