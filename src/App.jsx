import React, { useState } from "react";
import UserContainer from "./user/user-container";
import users from "../lib";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // above is the search state
  // filter users based on searchTerm
  const filteredUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div className="App">
      <h1> Student List</h1>
      <UserContainer users={users} />
    </div>
  );
}

export default App;
