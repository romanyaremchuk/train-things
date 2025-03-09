import React, { useEffect, useState } from "react";
import { User, getAllUsers } from "../api/api-users";
import { UserItem } from "./UserItem";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchedUsers = async () => {
      const data: User[] = await getAllUsers();
      setUsers(data);
    };
    fetchedUsers();
  }, []);

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
