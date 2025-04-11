import React from "react";
import UserCard from "./user-card";
import "./user.css";

export default function UserContainer({ users }) {
  return (
    <div className="user-container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  );
}
