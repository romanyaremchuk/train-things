import React, { useEffect, useState } from "react";
import { UserList } from "./components/UserList";
import "./styles/App.css";
import FilterForm from "./components/FilterForm";
import { getAllUsers, User } from "./api/api-users";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  //TODO fix to show the button Add user "in line"
  const navigationStyle = {
    display: "center",
  };

  useEffect(() => {
    const fetchedUsers = async () => {
      const data: User[] = await getAllUsers();
      setUsers(data);
      setFilteredUsers(data);
    };

    fetchedUsers();
  }, []);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <div style={navigationStyle}>
        <FilterForm users={users} setUsers={setFilteredUsers} />
        <button onClick={() => setModalActive(true)}>Add User</button>
      </div>

      <ModalWindow active={modalActive} setActive={setModalActive} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
