import React from "react";
import { UserList } from "./components/UserList";
import "./styles/App.css";
import FilterForm from "./components/FilterForm";

function App() {
  return (
    <div className="App">
      <FilterForm />
      <UserList />
    </div>
  );
}

export default App;
