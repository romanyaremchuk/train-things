import React from "react";
import { User } from "../api/api-users";

export const UserItem: React.FC<Omit<User, "id">> = ({
  name,
  username,
  email,
}) => {
  return (
    <div className="userItem">
      <div className="user__content">
        <div className="user__name">
          <strong> name: {name} </strong>
        </div>
        <div className="user__username">{username}</div>
        <div className="user__email">{email}</div>
      </div>
      <div className="user__deleteButton">
        <button>Delete</button>
      </div>
    </div>
  );
};
