import React, { useEffect, useState } from "react";

const Menu = ({ className }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <ul className={className}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
      <li>
        <a href="#">Award</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#" className={width <= "499" ? "login_show" : "login_hidden"}>
          Login
        </a>
      </li>
    </ul>
  );
};

export default Menu;
