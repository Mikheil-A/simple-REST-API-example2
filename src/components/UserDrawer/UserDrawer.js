import React from 'react';
import './UserDrawer.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import UserContent from "../UserContent/UserContent";


const UserDrawer = (props) => {

  return (
    <div className="user-drawer">
      <div id="title">
        <h1>User info: </h1>

        <div className="icons">
          <IconButton onClick={() => props.onSeeMoreInfo(props.user.id)}>
            <VisibilityIcon fontSize="large"/>
          </IconButton>
          <IconButton onClick={() => props.onCloseDrawer()}>
            <HighlightOffIcon fontSize="large"/>
          </IconButton>
        </div>
      </div>

      <UserContent user={props.user}/>
    </div>
  )
};

export default UserDrawer;
