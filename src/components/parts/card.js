import React from "react";
import {Link} from "react-router-dom";
import avatar from "../../assets/avatar.png";
import Loading from "./loading";
const Card = (props) => {
    const {user} = props;

    return (
        <>{user ?  user.map((user,i) => {

            return (
                <div key={i} className="card" style={{width: "25%"}}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="card-img-top" src={`${process.env.REACT_APP_API_URL}/api/user/photo.php/${user.uuid}?${new Date().getTime()}`} onError={i=>(i.target.src=`${avatar}`)} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.firstName}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link to={`/user.php/${user.uuid}`} className="btn btn-primary">View user</Link>
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

