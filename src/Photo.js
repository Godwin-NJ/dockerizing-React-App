import React, { useState } from "react";
import { robots } from "./robots";
const Photo = () => {
  return (
    <div className="parentRobot">
      {robots.map((data) => {
        const { id, name, username, email } = data;
        return (
          <div key={id} className="robots">
            <h1>{name}</h1>
            <h2>{username}</h2>
            <h3>{email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Photo;
