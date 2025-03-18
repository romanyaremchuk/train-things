import React, { useEffect, useState } from "react";
import { User } from "../api/api-users";

interface Props {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  resetFilter: boolean;
}

const FilterForm = ({ users, setUsers, resetFilter }: Props) => {
  const [nameToSearch, setNameToSearch] = useState<string>("");

  useEffect(() => {
    setNameToSearch("");
  }, [resetFilter]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nameToSearch.length > 0) {
      setUsers(users.filter((u) => u.firstName === nameToSearch));
    } else {
      setUsers(users);
    }
  }

  function handleSortByDate(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    users.sort(
      (a, b) =>
        new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime()
    );
    setUsers([...users]);
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
          <button
            type="submit"
            onClick={(e) => {
              handleSortByDate(e);
            }}
          >
            {" "}
            Sort by date{" "}
          </button>
        </label>
      </form>
    </div>
  );
};

export default FilterForm;
