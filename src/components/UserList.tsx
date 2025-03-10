import React, { useEffect, useState } from "react";
import { User, getAllUsers } from "../api/api-users";
import { UserItem } from "./UserItem";

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  return (
    <div>
      <h1> List of Users </h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem
              name={user.name}
              username={user.username}
              email={user.email}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
