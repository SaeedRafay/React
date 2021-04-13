import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";
import "./Friend.css";

function Friend() {
  const [friend, setFriend] = useState({});
  const getFriend = () => {
    return fetch("https://www.randomuser.me/api?results=1")
      .then((res) => res.json())
      .then((data) => {
        setFriend(() => data.results[0]);
      });
  };
  return (
    <div className="Friend">
      <Button getFriend={getFriend} />
      <FriendProfile attrFriend={friend} />
    </div>
  );
}

export default Friend;
