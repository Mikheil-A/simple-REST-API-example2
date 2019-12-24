import React from 'react';
import './User.scss';
import UserContent from "../UserContent/UserContent";
import {Link} from "react-router-dom";


const User = (props) => (
  <div className="user">
    <nav>
      <Link to="/users">Users</Link>
      <Link to={{
        pathname: `/posts/${props.location.state.user.id}`
      }}>Posts</Link>
    </nav>

    <div id="user-content">
      <UserContent user={props.location.state.user}/>
    </div>
  </div>
);

export default User;
