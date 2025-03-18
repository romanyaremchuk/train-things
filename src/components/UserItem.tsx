import React, { useState } from "react";
import { User } from "../api/api-users";

interface Props extends User {
  onDelete: (user: User) => void;
}

export const UserItem: React.FC<Props> = (user) => {
  const [timeSinceCreation, setTimeSinceCreation] = useState<number>(0);

  function displaySecondsSinceCreation(userCreationDate: Date): number {
    const seconds =
      new Date().getSeconds() - new Date(userCreationDate).getSeconds();
    setTimeSinceCreation(seconds);
    return seconds;
  }

  return (
    <div className="userItem">
      <div className="user__content">
        <div className="user__name">
          <strong>Full name: {user.firstName + " " + user.lastName}</strong>
        </div>
        <div className="user__username"> Username: {user.username}</div>
        <div className="user__birthDate">
          Birth date: {new Date(user.birthDate).toLocaleDateString()}
        </div>
        <div className="user__email">Email: {user.email}</div>

        {user.hair?.color && (
          <div className="user__hair__color">
            Hair color: {user.hair?.color}
          </div>
        )}
        {user.hair?.type && (
          <div className="user__hair__color">Hair type: {user.hair?.type}</div>
        )}
        <div className="createdDate">
          <strong>User created:</strong>{" "}
          {new Date(user.userCreatedDated).toLocaleDateString()}
        </div>

        {timeSinceCreation !== 0 && (
          <div className="createdDateSeconds">
            <strong>User created:</strong> {timeSinceCreation}
          </div>
        )}
      </div>
      <div className="user__deleteButton">
        <button onClick={() => user.onDelete(user)}>Delete</button>
      </div>
      <div className="user__updateTimeButton">
        <button
          onClick={() => displaySecondsSinceCreation(user.userCreatedDated)}
        >
          Show time since user was created
        </button>
      </div>
    </div>
  );
};
