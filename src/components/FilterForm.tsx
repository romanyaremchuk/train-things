import React, { useEffect, useState } from "react";
import { User } from "../api/api-users";

interface Props {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const FilterForm = ({ users, setUsers }: Props) => {
  const [nameToSearch, setNameToSearch] = useState<string>("");

  useEffect(() => {
    setUsers(users);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nameToSearch.length > 0) {
      setUsers(users.filter((u) => u.name == nameToSearch));
    } else {
      setUsers(users);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search name
          <input
            value={nameToSearch}
            onChange={(e) => setNameToSearch(e.target.value)}
            placeholder={"Search name"}
          />
          <button type="submit"> Sumbit </button>
        </label>
      </form>
    </div>
  );
};

export default FilterForm;
