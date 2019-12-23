import React from 'react';
import './User.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';



const User = (props) => {

  const drawerContent = () => {
    let content = null;
    if (props.userDataObj.isDrawerOpened) {
      content = <div>
        <div id="title">
          <h1>User info: </h1>

          <div className="icons">
            <IconButton onClick={() => props.onSeeMoreInfo(props.userDataObj.user.id)}>
              <VisibilityIcon fontSize="large"/>
            </IconButton>
            <IconButton onClick={() => props.onCloseDrawer()}>
              <HighlightOffIcon fontSize="large"/>
            </IconButton>
          </div>
        </div>

        <p>{props.userDataObj.user.name}</p>
        <p>{props.userDataObj.user.username}</p>
        <p>{props.userDataObj.user.email}</p>
        <p>{props.userDataObj.user.phone}</p>
        <p>{props.userDataObj.user.website}</p>
        <p>{props.userDataObj.user.company.name}</p>
      </div>
    }

    return (
      <div>
        {content}
      </div>
    )
  };


  return (
    <div className="user">
      {drawerContent()}
    </div>
  );
};

export default User;
