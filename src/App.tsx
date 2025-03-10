import React, { useEffect, useState } from "react";
import { UserList } from "./components/UserList";
import "./styles/App.css";
import FilterForm from "./components/FilterForm";
import { getAllUsers, User } from "./api/api-users";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchedUsers = async () => {
    const data: User[] = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchedUsers();
  }, []);

  return (
    <div className="App">
      <FilterForm users={users} updateUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
