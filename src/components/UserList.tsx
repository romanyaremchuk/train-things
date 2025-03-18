import React from "react";
import { User } from "../api/api-users";
import { UserItem } from "./UserItem";

interface Props {
  users: User[];
  // This matches what useState returns: [value, setValue]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  onDeleteUser: (user: User) => void;
}

export const UserList = ({ users, onDeleteUser }: Props) => {
  return (
    <div>
      <h1>List of Users</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem
              id={user.id}
              age={user.age}
              firstName={user.firstName}
              lastName={user.lastName}
              username={user.username}
              birthDate={user.birthDate}
              email={user.email}
              hair={user.hair}
              onDelete={onDeleteUser}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
