import React, { useEffect, useState } from "react";
import { getAllUsers, User } from "../api/api-users";

const FilterForm = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchedUsers = async () => {
      const data: User[] = await getAllUsers();
      setUsers(data);
    };
    fetchedUsers();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submit");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search name
          <input placeholder={"Search name"} />
          <button type="submit"> Sumbit </button>
        </label>
      </form>
    </div>
  );
};

export default FilterForm;
