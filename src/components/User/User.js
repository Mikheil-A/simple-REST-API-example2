import React from 'react';
import './User.scss';


const User = (props) => {

  return (
    <div>
      <h1>user works!</h1>
      <p>{props.userDataObj}</p>
    </div>
  );
};

export default User;
