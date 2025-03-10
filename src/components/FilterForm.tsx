import React, { useEffect, useState } from "react";
import { User } from "../api/api-users";

interface Props {
  users: User[];
  updateUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const FilterForm = ({ users, updateUsers }: Props) => {
  const [nameToSearch, setNameToSearch] = useState<string>("");

  useEffect(() => {
    updateUsers(users);
    console.log("use effect update users");
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nameToSearch.length > 0) {
      console.log("name to search submit " + nameToSearch);
      users.filter((u) => u.name == nameToSearch);
      //TODO store it like a normal human pls
      let filtered: User[] = users.map((u) => console.log(u.name));
      console.log("name to search submit " + nameToSearch);
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
