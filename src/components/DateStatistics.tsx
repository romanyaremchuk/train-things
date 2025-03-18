import React from "react";
import { User } from "../api/api-users";

interface Props {
  users: User[];
}

const DateStatistics = ({ users }: Props) => {
  const beforeSU = users.filter(
    (u) => new Date(u.birthDate).getFullYear() < 1991
  );
  const afterSU = users.filter(
    (u) => new Date(u.birthDate).getFullYear() >= 1991
  );

  return (
    <div>
      <h2>Soviet Union collapse </h2>
      <p>
        Soviet Union collapse happened in 1991. How many people were born before
        Soviet Union and after?
      </p>
      <h6> Before SU collapse:</h6>
      {beforeSU.length}
      <h6> After SU collapse: </h6>
      {afterSU.length}
    </div>
  );
};

export default DateStatistics;
