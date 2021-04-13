function FriendProfile({ attrFriend }) {
  return (
    <div className="FriendProfile">
      {attrFriend && Object.keys(attrFriend).length !== 0 && (
        <ul>
          {attrFriend.name.first && (
            <li>
              <strong>First Name:</strong> {attrFriend.name.first}
            </li>
          )}
          {attrFriend.name.last && (
            <li>
              <strong>Last Name:</strong> {attrFriend.name.last}
            </li>
          )}
          {attrFriend.location && (
            <li>
              <strong>Address:</strong> {attrFriend.location.street.name}{" "}
              {attrFriend.location.street.number},{" "}
              {attrFriend.location.postcode} {attrFriend.location.city},{" "}
              {attrFriend.location.state} {attrFriend.location.country}
            </li>
          )}
          {attrFriend.phone && (
            <li>
              <strong>Phone:</strong> {attrFriend.phone}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default FriendProfile;
