import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import Menu from "./Menu";
import Login from "./Login";

const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <span>Navbar</span>
      </div>
      <Menu className="app__navbar-links" />
      <Login />
      <div className="app_navbar_menu">
        <BsFillGridFill className="icons" onClick={() => setIsToggle(true)} />
        {isToggle && (
          <div className="app_navbar-container ">
            <AiOutlineClose
              className="icons close_icons"
              onClick={() => setIsToggle(false)}
            />
            <Menu className="app__navbar-container-links" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
