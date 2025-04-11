import React, { useState } from "react";
import UserContainer from "./user/user-container";
import users from "../lib";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // above is the search state
  // filter users based on searchTerm
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <h1> Student List</h1>
      {/* search input goes here */}
      <input
        className="search-bar"
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {/* send filtered users to UserContainer */}
      {filteredUsers.length > 0 ? (
        <UserContainer users={filteredUsers} />
      ) : (
        <p className="demo">No Matching students found</p>
      )}
    </div>
  );
}

export default App;
