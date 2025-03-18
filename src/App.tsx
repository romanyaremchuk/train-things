import React, { useEffect, useState } from "react";
import { UserList } from "./components/UserList";
import "./styles/App.css";
import FilterForm from "./components/FilterForm";
import { getAllUsers, User } from "./api/api-users";
import ModalWindow from "./components/ModalWindow";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [newUserId, setnewUserId] = useState<number>(0);
  const [resetFilter, setResetFilter] = useState(false);

  const navigationStyle = {
    display: "flex",
    padding: "15px",
    margin: "10px",
  };

  const fetchedUsers = async () => {
    const data: User[] = await getAllUsers();
    setUsers(data);
    setFilteredUsers(data);
    setnewUserId(data.length + 1);
    setResetFilter((prev) => !prev);
  };

  useEffect(() => {
    fetchedUsers();
  }, []);

  function handleDelete(userToDelete: User) {
    setFilteredUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
  }

  return (
    <div className="App">
      <div style={navigationStyle}>
        <FilterForm
          users={filteredUsers}
          setUsers={setFilteredUsers}
          resetFilter={resetFilter}
        />
        <button onClick={() => setModalActive(true)}>Add User</button>
        <button onClick={fetchedUsers}> Fetch Users</button>
      </div>

      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
        newUserId={newUserId}
        addNewUser={(newUser) => setFilteredUsers([newUser, ...filteredUsers])}
      />
      <UserList
        users={filteredUsers}
        setUsers={setUsers}
        onDeleteUser={handleDelete}
      />
    </div>
  );
}

export default App;
