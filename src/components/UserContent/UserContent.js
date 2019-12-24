import React from 'react';
import './UserContent.scss';


const UserContent = (props) => {

  return (
    <div>
      <p>{props.user.name}</p>
      <p>{props.user.username}</p>
      <p>{props.user.email}</p>
      <p>{props.user.phone}</p>
      <p>{props.user.website}</p>
      <p>{props.user.company.name}</p>
    </div>
  )
};

export default UserContent;
