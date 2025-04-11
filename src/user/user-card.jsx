import React from "react";
import "./user.css";

export default function UserCard({ name, email, phone }) {
  return (
    <div className="user-card">
      <h1 className="name">{name}</h1>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </div>
  );
}
