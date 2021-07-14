import React from "react";

function Profile(props) {
  const { value: user = {} } = props;
  return (
    <div className="text-center">
      <img src={user.avatar_url} alt={"Profile here"} />
      <br />
      <label>{user.name}</label>
    </div>
  );
}

export default Profile;
