import React, { useState } from "react";
import "./header.css";
import Dashboard from "./Dashboard";
import { assets } from "../assest/assest";

const Header = (props) => {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const user = userName;
  return (
    <>
      <div class="main">
        <header>
          <div class="sideBar">
            <div class="logo">
              <img src={assets.logo} alt="logo" />
            </div>
            <div class="menu">
              <ul>
                <li>Home</li>
                <li>Project</li>
                <li>To Do</li>
                <li>Task</li>
                <li>Progress</li>
                <li>Report</li>
              </ul>
            </div>
            <div className="Login">
              <input
                type="text"
                name="userName"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setUserName(input);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </header>
        <div>
          <nav>
            <div class="navBar">
              <div class="avtar">
                <img src={assets.avtar} alt="avtar" />
              </div>
              {user}
            </div>
          </nav>
          <Dashboard user={user} />
        </div>
      </div>
    </>
  );
};

export default Header;
